import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {
  @Input() callListActive! : boolean;
  @Input() emailListActive! : boolean;
  @Input() menuListActive! : boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
