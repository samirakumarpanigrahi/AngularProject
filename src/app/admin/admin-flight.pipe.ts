import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminFlight'
})
export class AdminFlightPipe implements PipeTransform {

  currentDate = new Date();
  // ourDate= new Date(2017, 5, 34, 12, 30, 11, 11);

  transform(value: any): unknown {
    console.log(value);
    
    const resultArray = [];
    if(value!=null)
    {
    for (const item of value) {
      let ourDate = new Date(item.departure);
      ourDate.setDate(this.currentDate.getDate())
      ourDate.setFullYear(this.currentDate.getFullYear())
      ourDate.setMonth(this.currentDate.getMonth())

      if (this.currentDate.getTime() < ourDate.getTime()) {
        resultArray.push(item);
      }

    }
    return resultArray;
  }
  }


}
