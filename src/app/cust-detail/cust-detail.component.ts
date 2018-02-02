import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cust-detail',
  templateUrl: './cust-detail.component.html',
  styleUrls: ['./cust-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustDetailComponent implements OnInit {

cust = {};
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getCustDetail(this.route.snapshot.params['id']);
  }

  getCustDetail(id) {
    this.http.get('/custs/' + id).subscribe(data => {
      this.cust = data;
    });
  }

}



