import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bandImage'
})
export class BandImagePipe implements PipeTransform {

  transform(imageUrl:any):string {
    console.log('==>', imageUrl);
    if(imageUrl) {
      return imageUrl.url;
    }
    return 'assets/images/default-group-image.jpg';
  }

}
