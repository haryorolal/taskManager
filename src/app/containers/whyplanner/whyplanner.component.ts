import { Component } from '@angular/core';
import { allimages } from 'src/app/constants/images';

@Component({
  selector: 'app-whyplanner',
  standalone: false,
  
  templateUrl: './whyplanner.component.html',
  styleUrl: './whyplanner.component.scss'
})
export class WhyplannerComponent {
  public images = allimages
}
