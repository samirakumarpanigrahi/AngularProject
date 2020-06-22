import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nextFlight'
})
export class NextFlightPipe implements PipeTransform {

  currentDate = new Date();
  // ourDate= new Date(2017, 5, 34, 12, 30, 11, 11);

  transform(value: any): unknown {
    console.log(value);
    if(value!=null)
    {
    const resultArray = [];
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
