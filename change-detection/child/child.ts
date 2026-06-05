import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child {
  @Input() user: any;

}
