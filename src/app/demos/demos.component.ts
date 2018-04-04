import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
demodeets: any;
custs: [any];
demos: [any];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('api/c').subscribe(data => {
      this.demodeets = data;
      console.log(this.demodeets);
    });
  }

}
