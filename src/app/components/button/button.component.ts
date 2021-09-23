import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() onClick = new EventEmitter<{list: string}>()
  constructor() { }

  ngOnInit(): void {
  }

  OnClicked() {
    this.onClick.emit();
  }

}
