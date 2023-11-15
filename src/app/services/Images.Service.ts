import { Image } from "../model/image.model";

export class ImagesService{
  private images:Image[] = [
    {src:'assets/imageBg2.jpg'},
    {src:'assets/imageBg3.jpeg'},
    {src:'assets/imageBg4.webp'},
    {src:'assets/imageBg5.webp'},
    {src:'assets/imageBg6.webp'},
    {src:'assets/imageBg7.webp'},
    
  ]
  getImages() {
    return this.images;
  }
}