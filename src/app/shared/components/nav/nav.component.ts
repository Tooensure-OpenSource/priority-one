import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Business } from 'src/app/components/business/buisness.model';
import { BusinessService } from 'src/app/components/business/business.service';
import { dropdownService } from '../dropdown/dropdown.service';
import { Nav } from './nav.model';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor : 'red',
        transform: 'translateX(100vh)',
        width: "100vw",
        // height: '100vh',
        position: 'fixed',
      })),
      state('shrunken', style({
        // backgroundColor : 'green',
        transform: 'translateX(0px) scale(0.5)',
        display: 'none',
        height: '100vh',
        width: "100vw",
        position: 'fixed',
      })),
      state('highlighted', style({
        // backgroundColor : 'blue',
        transform: 'translateX(0)',
        display: 'inline-block',
        height: '100vh',
        position: 'fixed',
        width: "100vw"
        // background-color: whitesmoke;
    
      })),
      transition('normal <=> highlighted', animate(500)),
      transition('highlighted <=> normal', animate(1500))
    ])
  ]
})
export class NavComponent implements OnInit {
  state : string = "normal"
  callListActive : boolean = false;
  emailListActive : boolean = false;
  menuListActive : boolean = false;

  dropdown : boolean = false;
  business! : Business | undefined;

  @Input() navPosition! : string;
  constructor(
    private businessService:BusinessService,
    private dropdownService:dropdownService) {

      this.dropdownService.dropdownSelected.subscribe(
        (b : boolean) => {
          this.callListActive = this.dropdownService.drop;
        //  this.callListActive == b ? this.callListActive = true : this.callListActive = false;
        //  console.log(this.callListActive)
         this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
         // this.showDropdown = b
        }
      );
    }

  ngOnInit(): void {
    this.business = this.businessService.GetBusiness(1);
    // this.dropdown = this.dropdownService.get(1);
  }

  onDropdownDefault() {
    
    // this.phoneDropdown = false;
    // this.emailDropdown = false;
    // this.menuDropdown  = false;
  }

  onSelectDrowpdown() {
    this.dropdownService.OnSelected()
  }

  // onSelectDrowpdownCaller() {
  //   this.phoneDropdown == false ? this.phoneDropdown = true : this.onDropdownDefault()
  //   // this.dropdownService.dropdownCallListSelected.emit();
  // }

}
