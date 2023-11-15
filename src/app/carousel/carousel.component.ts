import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesService } from '../services/Images.Service';
import { Image } from '../model/image.model';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('0.1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  imagesList:Image[] = [];
  currentImage = 0;

  constructor(private images:ImagesService){
  }

  ngOnInit(): void {
    this.imagesList = this.images.getImages()
  }

  onPreviousClick() {
    const previous = this.currentImage - 1;
    this.currentImage = previous < 0 ? this.imagesList.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentImage + 1;
    this.currentImage = next === this.imagesList.length ? 0 : next;
  }

  onIndicatorClick(index: number) {
    this.currentImage = index;
  }
}
