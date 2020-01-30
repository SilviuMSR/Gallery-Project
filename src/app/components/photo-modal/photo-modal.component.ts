import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent implements OnInit {

  @Input() photo: Object;
  @Input() status: any;
  modalOptions: NgbModalOptions;
  modalStatus: boolean = false;
  constructor(
    private modalSrv: NgbModal
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      size: 'xl'
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.status.currentValue   ) this.openModal()
  }

  openModal = () => {
    this.modalSrv.open("", this.modalOptions)
  }

}
