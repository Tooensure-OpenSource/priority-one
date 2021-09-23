import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {
  @Input() callListActive! : boolean;
  @Input() emailListActive! : boolean;
  @Input() menuListActive! : boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
