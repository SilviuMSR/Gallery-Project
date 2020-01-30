import { Component, OnInit } from '@angular/core';
import { NAVBAR_LINKS, NAVBAR_TITLE } from '../../utils/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarLinks: Array<String>;
  navbarTitle: String;
  constructor() {
  }

  ngOnInit() {
    this.navbarLinks = NAVBAR_LINKS;
    this.navbarTitle = NAVBAR_TITLE;
  }

}
