import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet, CounterComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = '4-counter-app';
}
