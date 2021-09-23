import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { dropdownService } from '../../dropdown/dropdown.service';
import { NavService } from '../../nav/nav.service';

@Component({
  selector: 'master-layout',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
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
    ]),
    trigger('wildState', [
      state('normal', style({
        backgroundColor : 'red',
        transform: 'translateX(0)',
        width: "0",
        height: "0",
        
      })),
      state('highlighted', style({
        backgroundColor : 'blue',
        transform: 'translateX(-100px)',
        display: 'block',
        position: 'fixed',
        // background-color: whitesmoke;
    
      })),
      transition('normal <=> highlighted', animate(500))
    ])
  ]
})
export class MasterComponent implements OnInit {
  navPositionTop : string = "top";
  navPositionBottom : string = "bottom";
  showDropdown : boolean = false;
  state = "normal"
  wildState = "normal"

  constructor(
    private navService:NavService,
    private dropdownService:dropdownService
  ) { 
   this.dropdownService.dropdownSelected.subscribe(
     (b : boolean) => {
      // this.showDropdown = b,
      this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      // this.showDropdown = b
     }
   );
  }

  ngOnInit(): void {
  }

}
