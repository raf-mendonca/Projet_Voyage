import { Component, OnInit } from '@angular/core';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';


@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Cuba', 'Méxique', 'Republique Dominicaine','Colombia', 'Trinidad', 'Bahamas'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public chartColors: Array<any> = [
    { 
      backgroundColor: ['#FF1493', '#9374CC', 'yellow','green', 'navy','#BAFEFE']
    }
]

  public barChartData: ChartDataSets[] = [
    { data: [95000, 65800, 45000, 32600, 12000, 44000]},
  ];

  constructor() { }

  ngOnInit() {
  }
}