import { EventEmitter } from "@angular/core";

export class dropdownService {
    drop : boolean = false;
    dropdownSelected = new EventEmitter<boolean>();
    dropdownCallListSelected = new EventEmitter<boolean>();

    OnSelected() {
        this.drop == true ? this.drop = false : this.drop = true;
        this.dropdownSelected.emit(this.drop)
    }
    onCalllistSelected() {
        this.dropdownCallListSelected.emit(this.drop)
        // console.log(this.drop)
    }
}