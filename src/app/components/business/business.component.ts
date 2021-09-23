import { Component, OnInit, Output } from '@angular/core';
import { Business } from './buisness.model';
import { BusinessService } from './business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  @Output() businesses! : Business[];
  constructor(
    private businessService:BusinessService
  ) { }

  ngOnInit(): void {
    this.businesses = this.businessService.GetBusinesses();
  }

}
