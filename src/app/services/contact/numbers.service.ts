import { PhoneNumber } from "src/app/models/contact/contact.model";
import database from "src/assets/data/business/contact/phoneNumbers.json";

export class PhoneNumberService {
    private phoneNumbersdb : PhoneNumber[] = this.SetPhoneNumbers();

    private SetPhoneNumbers() : PhoneNumber[] {
        return database.slice();
    }
    public GetPhoneNumbers() : PhoneNumber[] {
        return this.phoneNumbersdb.slice();
    }
    public GetPhoneNumber(id:number) : PhoneNumber | undefined {
        return this.GetPhoneNumbers().find(i => i.id == id)
    }
    public GetPhoneNumberParentId(id:number) : PhoneNumber | undefined {
        return this.GetPhoneNumbers().find(i => i.contactId == id)
    }
}