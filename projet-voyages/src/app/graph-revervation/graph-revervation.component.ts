import { Component, OnInit, Input } from '@angular/core';
import { GraphiqueService } from '../graphique.service';
import { Reservation } from '../reservation';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-graph-revervation',
  templateUrl: './graph-revervation.component.html',
  styleUrls: ['./graph-revervation.component.css']
})
export class GraphRevervationComponent implements OnInit {
  reservations : Reservation[];
  labels:  Array<string> =[] ;
  data: Array<number>=[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['#FF1493', '#9374CC', 'yellow','green', 'navy','#BAFEFE']
    },
  ];
  constructor(private graphiqueService: GraphiqueService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.graphiqueService.getReservations()
        .subscribe(resultat => {
          this.reservations = resultat;
          this.getLabels();
          this.getValues();
          this.addValues();
        });
  }

  getValues () :void{
    this.data= new Array(this.labels.length).fill(0);
    this.reservations.map(reservation =>{
      if(this.labels.includes(reservation.destination))
      {
        let index= this.labels.indexOf(reservation.destination);
        this.data[index]++;
      }
    });
  }

  addValues () :void{
    for(let i=0; i<this.labels.length; i++){
      this.pieChartLabels.push(this.labels[i]);
      this.pieChartData.push(this.data[i]);
      this.pieChartColors[0].backgroundColor;
    }
  }


  getLabels () :void{
    this.reservations.map(reservation =>{
      if(!this.labels.includes(reservation.destination)){
        this.labels.push(reservation.destination);
      }
    });   
  }
}