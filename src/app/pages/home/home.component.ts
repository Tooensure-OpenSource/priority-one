import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/components/feature/feature.model';
import { FeatureService } from 'src/app/components/feature/feature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  features! : Feature[];
  
  constructor(
    private featureService:FeatureService
  ) { }

  ngOnInit(): void {
    this.features = this.featureService.GetFeatures();
  }

}
