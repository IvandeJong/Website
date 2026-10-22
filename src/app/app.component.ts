import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from './projects';
import { SKILLS } from './skills';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly skills = SKILLS;
  protected readonly projects = [...PROJECTS].sort((first, second) => second.year - first.year);
}
