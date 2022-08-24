import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-test',
  templateUrl: './second-test.component.html',
  styleUrls: ['./second-test.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SecondTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('user')user:any;

}
