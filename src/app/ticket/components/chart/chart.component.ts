import { Component, OnInit } from '@angular/core';
import { multi } from './data';
import * as shape from 'd3-shape';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  multi!: any[]
  // view: [number, number] = [700, 125];
  curve = shape.curveBasis;

  // options
  legend: boolean = false;
  autoSize: boolean = true;
  showLabels: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = false;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = false;
  showGridLines: boolean = false;
  colorScheme : any = {
    domain: ['#8A74F9', 'rgba(138, 116, 249, 0.26)','rgba(138, 116, 249, 0.00)'],
  };
//   onResize(event: any) {
//     this.view = [event.target.innerWidth / 1.5, 125];
// }
// const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 200);
// gradient.addColorStop(0, 'blue');
// gradient.addColorStop(1, 'white');
  constructor() {
    Object.assign(this, { multi });
  }
  ngOnInit() {
    // this.data = [
    //   {
    //     "name": "January",
    //     "value": 100
    //   },
    //   {
    //     "name": "February",
    //     "value": 150
    //   },
    //   {
    //     "name": "March",
    //     "value": 80
    //   },
    //   {
    //     "name": "April",
    //     "value": 200
    //   },
    //   {
    //     "name": "May",
    //     "value": 180
    //   },
    //   {
    //     "name": "June",
    //     "value": 120
    //   },
    //   {
    //     "name": "July",
    //     "value": 90
    //   },
    //   {
    //     "name": "August",
    //     "value": 250
    //   }
    // ];
  }
  onSelect(event: any) {
    console.log(event);
  }
}
