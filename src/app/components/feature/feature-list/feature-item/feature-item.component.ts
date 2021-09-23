import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../feature.model';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit {
  @Input() feature! : Feature;
  constructor() { }

  ngOnInit(): void {
  }

}
