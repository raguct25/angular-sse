import { Component, OnInit } from '@angular/core';
import { SseEventService } from './sseEventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SSE Project';
  constructor(private sseEventService: SseEventService) {}
  ngOnInit(): void {
    console.log('ng init called');

    this.sseEventService
      .getServerSentEvent('http://localhost:3000/sse')
      .subscribe((data: any) => console.log('data', data));
  }
}
