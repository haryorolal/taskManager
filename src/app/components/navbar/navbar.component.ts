import { Component, OnInit } from '@angular/core';
import {allimages} from "../../constants/images";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/constants/services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent{
  public images = allimages
  menu = faBars
  closeMenu = faTimes
  openMenu = false

  constructor(public loginSerivce: LoginService) {

  }


  openMenufunction() { 
    this.openMenu = true
  }

  closeMenufunction() {
    this.openMenu = false
  }

  
}
