import { Component, Input, OnInit } from '@angular/core';
import { Contact, Email } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() logoText : string | null = null;
  dropdown : boolean = false;
  contacts! : Contact[];
  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
  }

  Dropdown() {
    this.dropdown = this.onSwitch(this.dropdown);
    console.log(this.dropdown);
  }
  
  onSwitch(boolean:Boolean) {
    return boolean ? false : true;
  }
}
