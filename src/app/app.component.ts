import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesService } from './services/Images.Service';
import { Switch } from './switch/switch.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,CarouselComponent, GalleryComponent, Switch],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ImagesService],

})
export class AppComponent {
  showCarousel:boolean = true;

  toggleComponent() {
    this.showCarousel = !this.showCarousel;
  }
}
