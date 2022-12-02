import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'koodaki-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor() {}
  @Input() project: any;

  ngOnInit(): void {}
}
