import { Contact, Email } from "src/app/models/contact/contact.model";
import database from "src/assets/data/business/contact/emails.json";

export class EmailService {
    private emailsdb : Email[] = this.SetEmails();

    // Debug Space
    Debug() {
        console.log(this.emailsdb);
    }











    private SetEmails() : Email[] {
        return database.slice();
        
    }
    public GetEmails() : Email[] {
        return this.emailsdb.slice();
    }
    public GetEmail(id:number) : Email | undefined {
        return this.GetEmails().find(i => i.id == id)
    }
    public GetEmailParentId(id:number) : Email | undefined {
        return this.GetEmails().find(i => i.contactId == id)
    }
}