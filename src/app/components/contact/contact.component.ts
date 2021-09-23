import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() isCallList! : boolean;
  @Input() isEmailList! : boolean;
  @Input() isMenuList! : boolean;

  contacts! : Contact[];
  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
    this.contacts = this.contactService.GetContacts();
  }

}
