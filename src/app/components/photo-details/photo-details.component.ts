import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  @Input() photo: any;
  @Input() splitScreen: boolean;

  constructor() { }

  @Output()
  public onCloseDetails = new EventEmitter();

  ngOnInit() {
  }

  // Function called when back button pressed
  closeDetailsHandler = () => {
    this.splitScreen = false
    this.onCloseDetails.emit({
      value: this.splitScreen
    })
  }

}
