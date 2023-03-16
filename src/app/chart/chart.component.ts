

import { Component, Input, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts'
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
charts:any;
type:any = 'bar';
revenue:any;
color:any;
submitted:boolean = false;
@Input() set Type(e:any){
  this.type = e;
  // console.log(this.type);
};
@Input() set Submitted(e:any){
  this.submitted = e;
  if(this.submitted){
      const cValue = Object.keys(this.color)
      const rValue = Object.keys(this.revenue)
    for(let i=0;i<this.options.series[0].data.length;i++){
      this.options.series[0].data[i].color = this.color[cValue[i]];
      this.options.series[0].data[i].y = +this.revenue[rValue[i]];
    }
    this.options.chart.type = this.type;
    this.charts = HighCharts.chart('chart',this.options)
  }
};
@Input() set Color(e:any){
  this.color = e;
};
@Input() set Revenue(e:any){
  this.revenue = e;
}
  constructor() { }

  ngOnInit(): void {
   this.charts = HighCharts.chart('chart',this.options)
  }

options:any = {
  chart:{
    type:this.type || 'bar',
    inverted:false
  },
  title:{
    text:'Graph Project'
  },
  subtitle:{
    text:'Project for displaying graph values'
  },
  xAxis:{
    categories: ['January','February','March'],
    title:{
      text:'Months data'
    }
  },
  yAxis:{
    min:0,
    title:{
      text:'Growth',
      align:'middle'
    },
    labels:{
      overflow:'justify'
    }
  },
  plotOptions:{
    bar:{
      dataLabels:{
        enabled:true
      },
     series: {
        colorByPoint: true
      }
    }
  },
  legend:{
    layout:'horizontal',
    align:'right',
    floating:true,
    borderWidth:1,
    backgroundColor: HighCharts.defaultOptions.legend?.backgroundColor || '#FFFFFF',
    shadow:true,
  },
  credits:{
    enabled: false,
  },
  series:[
    {
      name:'Revenue',
      data:[
        {name:'January',y:25000,color:'Red'},
        {name:'February',y:22000,color:'Green'},
        {name:'March',y:28000,color:'Purple'},
      ]
    }
  ]

 
}

}
