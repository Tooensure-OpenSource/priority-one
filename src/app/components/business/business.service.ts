import { Injectable } from "@angular/core";
import database from "src/assets/data/business/businesses.json";
import { Business } from "./buisness.model";

@Injectable()
export class BusinessService {
    private businessesdb : Business[] = this.SetBusinesses();

    private SetBusinesses() : Business[] {
        return database.slice();
    }
    public GetBusinesses() : Business[] {
        return this.businessesdb.slice();
    }
    public GetBusiness(id:number) : Business | undefined {
        return this.GetBusinesses().find(i => i.id == id);
    }
    public GetPhoneNumber(id:number) : Business | undefined {
        return this.GetBusinesses().find(i => i.id == id)
    }
}