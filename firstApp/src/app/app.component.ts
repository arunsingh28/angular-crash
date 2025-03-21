import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { GreetingComponent } from "./components/greeting/greeting.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, GreetingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Angular 18');
  }
  name = signal('Arun Pratap Singh');
}
