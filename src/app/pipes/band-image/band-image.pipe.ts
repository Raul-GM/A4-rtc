import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bandImage'
})
export class BandImagePipe implements PipeTransform {

  transform(imageUrl:any):string {
    if(imageUrl) {
      return imageUrl;
    }
    return 'assets/images/default-group-image.jpg';
  }

}
