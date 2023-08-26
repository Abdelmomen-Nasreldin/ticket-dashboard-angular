import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  chartData = [
    {
      name: 'Bangladesh',
      series: [
        { value: 5842, name: '2016-09-21T11:45:02.163Z' },
        { value: 2879, name: '2016-09-16T17:10:25.388Z' },
        { value: 2167, name: '2016-09-18T12:01:55.392Z' },
        { value: 5037, name: '2016-09-15T17:53:19.784Z' },
        { value: 6357, name: '2016-09-15T17:31:58.391Z' },
      ],
    },
    {
      name: 'Liechtenstein',
      series: [
        { value: 5970, name: '2016-09-21T11:45:02.163Z' },
        { value: 4342, name: '2016-09-16T17:10:25.388Z' },
        { value: 3019, name: '2016-09-18T12:01:55.392Z' },
        { value: 2031, name: '2016-09-15T17:53:19.784Z' },
        { value: 4101, name: '2016-09-15T17:31:58.391Z' },
      ],
    },
  ];

  colorScheme = 'cool';
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Value';
  showDataLabel = true;
}
