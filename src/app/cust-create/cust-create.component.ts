import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cust-create',
  templateUrl: './cust-create.component.html',
  styleUrls: ['./cust-create.component.css']
})
export class CustCreateComponent implements OnInit {
customer = {};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveCustomer() {
    this.http.post('api/something', this.customer)
      .subscribe(res => {
        const id = res['_id'];
        this.router.navigate(['/cust-details', id]);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
