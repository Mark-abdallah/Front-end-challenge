import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Dayes'
})
export class PushAtPipe implements PipeTransform {
 todayDate:Date=new Date();

  transform(publishingDate: any): number {
    const dateDifference = (Date.now() - Date.parse(publishingDate));
      return Math.ceil(dateDifference/ (1000 * 60 * 60 * 24));
  }

}
