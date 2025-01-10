import { Component } from '@angular/core';
import { allimages } from 'src/app/constants/images';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public images = allimages

}
