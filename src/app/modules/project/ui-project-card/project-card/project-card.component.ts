import { Component, Input, OnInit } from '@angular/core';
import { GetProjectDto } from '../../data-access/dtos/get-project-dto';

@Component({
  selector: 'koodaki-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor() {}
  @Input() project?: GetProjectDto;
  alternativeImage = 'assets/images/d-i-2.png';
  ngOnInit(): void {}
}
