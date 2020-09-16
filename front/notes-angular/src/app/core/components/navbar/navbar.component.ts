import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sliderEnabled : boolean = false;

  @Output() sliderChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onSliderChange() {
    this.sliderChanged.emit(this.sliderEnabled);
  }
}
