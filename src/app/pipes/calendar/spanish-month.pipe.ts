import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spanishMonth'
})
export class SpanishMonthPipe implements PipeTransform {

  transform(month: string): string {
    const months = {
      january: 'Enero',
      february: 'Febrero',
      march: 'Marzo',
      april: 'Abril',
      may: 'Mayo',
      june: 'Junio',
      july: 'Julio',
      august: 'Agosto',
      september: 'Septiembre',
      october: 'Ocutbre',
      november: 'Noviembre',
      december: 'Diciembre',
    }
    return months[month.toLowerCase()] || month;
  }

}
