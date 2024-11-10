import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  isLive: boolean = true; // Toggle this based on the live status
  videoUrl: string = 'https://path/to/your/live/video'; // Example URL

  constructor() {}

  ngOnInit(): void {
    // Here, you can check with your backend or live server if the stream is live
    // For this example, we assume the video is live
  }
}
