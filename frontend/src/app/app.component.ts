import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EuropaWahlComponent} from "./europa-wahl/europa-wahl.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EuropaWahlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
