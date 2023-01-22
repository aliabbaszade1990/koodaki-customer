import { Component, OnInit } from '@angular/core';
import { InitializationService } from './modules/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private initializationService: InitializationService) {}
  ngOnInit(): void {
    this.initializationService.initializeApp();
  }
}
