import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
demos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('api/d').subscribe(data => {
      this.demos = data;
      console.log(this.demos);
    });
  }

}
