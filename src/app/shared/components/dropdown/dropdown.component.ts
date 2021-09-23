import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { dropdownService } from './dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
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
export class DropdownComponent implements OnInit {
  state = "normal"
  @Input() callListActive! : boolean;
  @Input() emailListActive! : boolean;
  @Input() menuListActive! : boolean;
  
  constructor(
    private dropdownService:dropdownService) { 
    this.dropdownService.dropdownCallListSelected.subscribe(
      (b : boolean) => {
        // this.callListActive = true;
      //  this.callListActive == true ? this.callListActive = false : this.callListActive = true,
      //  this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
       // this.showDropdown = b
      }
    );
  }

  ngOnInit(): void {
  }

}
