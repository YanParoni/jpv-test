import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesService } from '../services/Images.Service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  providers:[ImagesService],
})
export class GalleryComponent implements OnInit {
  imagesList: Image[] = [];
  currentImage = 0;
  selectedImageClass: string = 'notSelected';

  constructor(private images: ImagesService) {
  }

  ngOnInit(): void {
    this.imagesList = this.images.getImages();
  }

  selectImage(index: number): void {
    this.selectedImageClass = 'selected';
    this.currentImage = index;
  }
  getThumbnailClass(index: number): string {
    return index === this.currentImage ? 'selected' : 'notSelected';
  }
}
