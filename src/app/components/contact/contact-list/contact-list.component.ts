import { Component, Input, OnInit } from '@angular/core';
import { Contact, Email, PhoneNumber } from 'src/app/models/contact/contact.model';
import { EmailService } from 'src/app/services/contact/email.service';
import { PhoneNumberService } from 'src/app/services/contact/numbers.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts! : Contact[];
  @Input() emailList! : Email[];
  @Input() isCallList! : boolean;
  @Input() isEmailList! : boolean;
  @Input() isMenuList! : boolean;
  phoneNumberList! : PhoneNumber[];
  constructor(
    private emailService:EmailService,
    private phoneNumberSerivce:PhoneNumberService
  ) { }

  ngOnInit(): void {
    this.emailService.Debug();
    this.emailList = this.emailService.GetEmails();
    this.phoneNumberList = this.phoneNumberSerivce.GetPhoneNumbers();

  }

}
