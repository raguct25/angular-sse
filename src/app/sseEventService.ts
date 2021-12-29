import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { SseService } from './sse.service';

@Injectable({
  providedIn: 'root'
})
export class SseEventService {

  constructor(private zone: NgZone, private sseService: SseService) {}

  getServerSentEvent(url: string) {
    console.log('url', url);
    
    return new Observable((observer: any) => {
      console.log('observer called', observer);
      
      const eventSource = this.sseService.getEventSource(url);

      eventSource.onmessage = (event: any) => {
        this.zone.run(() => {
          console.log('onmessage called', event);
          
          observer.next(event);
        });
      };

      eventSource.onerror = (error: any) => {
        this.zone.run(() => {
          observer.error('Error calling', error);
        });
      };
    });
  }
}
