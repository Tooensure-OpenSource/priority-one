import { Component, Input, OnInit } from '@angular/core';
import { Email, PhoneNumber } from 'src/app/models/contact/contact.model';
import { EmailService } from 'src/app/services/contact/email.service';
import { PhoneNumberService } from 'src/app/services/contact/numbers.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() id! : number;
  @Input() email! : Email | undefined;
  @Input() phoneNumber! : PhoneNumber | undefined;

  @Input() isCallList! : boolean;
  @Input() isEmailList! : boolean;
  @Input() isMenuList! : boolean;
  constructor(
    private emailService:EmailService,
    private phoneNumberSerivce:PhoneNumberService
  ) { }

  ngOnInit(): void {
    // this.email = this.emailService.GetEmailParentId(this.id);
    // this.phoneNumber = this.phoneNumberSerivce.GetPhoneNumberParentId(this.id);
    // console.log("DEBUGGER")
    // console.log(this.email)
    // this.phoneNumber = this.phoneNumberSerivce.GetPhoneNumberParentId(this.id);
  }

}
