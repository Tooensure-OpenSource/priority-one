import { Contact, Email, PhoneNumber } from "src/app/models/contact/contact.model";
import phoneNumbersdb from "src/assets/data/business/contact/emails.json";
import contactJsondb from "src/assets/data/business/contact/phoneNumbers.json";
import database from "src/assets/data/business/contact/contacts.json";
import { EmailService } from "./email.service";
import { PhoneNumberService } from "./numbers.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactService {
    // private phoneNumbersdb : PhoneNumber[] = phoneNumbersdb;
    // https can also be pass as a priameter GetContacts(httpClient)
    private contactsdb : Contact[] = this.ContectDbContext();

    constructor(
        private phoneNumberService:PhoneNumberService,
        private emailService:EmailService) { }
    
    private ContectDbContext() : Contact[] {
        return database.slice();
    }
    GetContacts() {
        return this.contactsdb.slice();
    }
    private SetContacts(
        emails:Email[], numbers:PhoneNumber[]) {
        this.SetEmails(emails);
        this.SetPhoneNumbers(numbers);
    }
     
    private SetEmails(listOfEmails:Email[]) {
        this.contactsdb.forEach(contact => {
            listOfEmails.forEach(email => {
                var emailTemp : Email | undefined;
                emailTemp = this.emailService.GetEmail(contact.id);
                contact.emails.push(email);
            });
        });
    }

    private SetPhoneNumbers(listOfPhoneNumbers:PhoneNumber[]) {
        this.contactsdb.forEach(contact => {
            listOfPhoneNumbers.forEach(number => {
                var numberTemp : PhoneNumber | undefined;
                numberTemp = this.phoneNumberService.GetPhoneNumber(contact.id);
                contact.emails.push(number);
            });
        });
    }
}