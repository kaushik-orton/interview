import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  data:any
  products:any
  usd:number =0
  url='https://v6.exchangerate-api.com/v6/d659966f6449a96c9309fa45/latest/inr'
  url1="https://my-json-server.typicode.com/kaushik-orton/Jsondata/data"
  flag:boolean = true;
  constructor(private http:HttpClient){
    http.get(this.url).subscribe(p=>{this.data=p;
     this. usd=this.data.conversion_rates.USD
    })

    http.get(this.url1).subscribe(p=>{this.products=p})
  }
  iff(){
    this.flag=!this.flag
    console.log('value changed',this.flag)
  }
}
