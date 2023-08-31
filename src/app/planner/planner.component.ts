import { Component } from '@angular/core';
import { WeekSchedule } from '../domain/week-schedule';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent {
  plannerWeek: WeekSchedule[];
  plannerTime = [
    {
      time: new Date("01 Jan 1970 00:00:00")
    },
    {
      time: new Date("01 Jan 1970 01:00:00")
    },
    {
      time: new Date("01 Jan 1970 02:00:00")
    },
    {
      time: new Date("01 Jan 1970 03:00:00")
    },
    {
      time: new Date("01 Jan 1970 04:00:00")
    },
    {
      time: new Date("01 Jan 1970 05:00:00")
    },
    {
      time: new Date("01 Jan 1970 06:00:00")
    },
    {
      time: new Date("01 Jan 1970 07:00:00")
    },
    {
      time: new Date("01 Jan 1970 08:00:00")
    },
    {
      time: new Date("01 Jan 1970 09:00:00")
    },
    {
      time: new Date("01 Jan 1970 10:00:00")
    },
    {
      time: new Date("01 Jan 1970 11:00:00")
    },
    {
      time: new Date("01 Jan 1970 12:00:00")
    },
    {
      time: new Date("01 Jan 1970 13:00:00")
    },
    {
      time: new Date("01 Jan 1970 14:00:00")
    },
    {
      time: new Date("01 Jan 1970 15:00:00")
    },
    {
      time: new Date("01 Jan 1970 16:00:00")
    },
    {
      time: new Date("01 Jan 1970 17:00:00")
    },
    {
      time: new Date("01 Jan 1970 18:00:00")
    },
    {
      time: new Date("01 Jan 1970 19:00:00")
    },
    {
      time: new Date("01 Jan 1970 20:00:00")
    },
    {
      time: new Date("01 Jan 1970 21:00:00")
    },
    {
      time: new Date("01 Jan 1970 22:00:00")
    },
    {
      time: new Date("01 Jan 1970 23:00:00")
    },
    {
      time: new Date("01 Jan 1970 24:00:00")
    }
  ];

  constructor() {
    this.plannerWeek = [
      {
        date: new Date("2023-08-13")
      },
      {
        date: new Date("2023-08-14")
      },
      {
        date: new Date("2023-08-15")
      },
      {
        date: new Date("2023-08-16")
      },
      {
        date: new Date("2023-08-17")
      },
      {
        date: new Date("2023-08-18")
      },
      {
        date: new Date("2023-08-19")
      }
    ];
  }

  onCellSelect(dateVal: WeekSchedule, event: any) {
    let time = event.target.value;
    let timeParts = time.split(':');
    dateVal.date?.setHours(timeParts[0]);
    dateVal.date?.setMinutes(timeParts[1]);
    console.log(dateVal.date);
  }
}
