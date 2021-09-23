import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../feature.model';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {
  @Input() features! : Feature[];
  constructor() { }

  ngOnInit(): void {
  }

}
