import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  capitalizeMethod = (value, char) => {
    return value.split(char).map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(char)
  }
  transform(value: any): string {
    const valueCapitalized = this.capitalizeMethod(this.capitalizeMethod(value, ' '), '.')
    return valueCapitalized;
  }

}
