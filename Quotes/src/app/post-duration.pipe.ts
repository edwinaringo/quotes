import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postDuration'
})
export class PostDurationPipe implements PipeTransform {

  transform(value: any): number{
    let today:Date = new Date(); // this gets the current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(todayWithNoTime - value)// this will return value in milliseconds
    const secondsInADay= 86400; //60 seconds multiplied by 60 minutes in an hour by 24 hours

    var dateDifferenceSeconds=dateDifference*0.001; // this will convert it to seconds

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >= 1){
        return dateCounter;
    }else{
        return 0;

  }
  }

}
