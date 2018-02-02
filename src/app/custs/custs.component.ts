import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-custs',
  templateUrl: './custs.component.html',
  styleUrls: ['./custs.component.css']
})
export class CustsComponent implements OnInit {
custs: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('api/customers').subscribe(data => {
      this.custs = data;
      console.log(this.custs);
    });
  }

}
