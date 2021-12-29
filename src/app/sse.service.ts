import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SseService {
  constructor() {}

  getEventSource(url: string): EventSource {
    console.log('getEventSource', url);

    return new EventSource(url);
  }
}
