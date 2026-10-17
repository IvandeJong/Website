import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from './projects';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly projects = [...PROJECTS].sort((first, second) => second.year - first.year);
}
