import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreatWorldComponent } from './great-world/great-world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreatWorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
