import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
form:FormGroup;
color:FormGroup;
type:FormGroup;
chartTypes:any =['bar','pie','line','column'];
colorsChoice:any =['color1','color2','color3'];
months:any =['january','february','march'];
colors:any =['red','green','purple','yellow','blue','grey','orange'];
selectedType:any = this.chartTypes[0];
monthsvalue:any;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(){
    this.form = this._fb.group({
      january:[25000,Validators.required],
      february:[28000,Validators.required],
      march:[12000,Validators.required]
    })

      this.color = this._fb.group({
        color1:[this.colors[0],Validators.required],
        color2:[this.colors[1],Validators.required],
        color3:[this.colors[2],Validators.required],
      })

      this.type = this._fb.group({
        radio:[this.chartTypes[0],Validators.required],
      })
  }


  select(e:any){
    // console.log(e);
    this.selectedType = e.value;
  }

  monthValue(e:any,index:any){
    // console.log(e);
    this.monthsvalue = this.form.value;
  }
  submit(){
    console.log('submitted');
    
  }
}
