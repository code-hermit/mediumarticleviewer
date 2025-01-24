import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediumFeedComponent } from './components/medium-feed/medium-feed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MediumFeedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mediumapp';
}
