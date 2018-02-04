
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cust-edit',
  templateUrl: './cust-edit.component.html',
  styleUrls: ['./cust-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustEditComponent implements OnInit {
  customer = {};
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomer(this.route.snapshot.params['id']);
  }

  getCustomer(id) {
    this.http.get('api/' + id).subscribe(data => {
      this.customer = data;
    });
  }

  UpdateCustomer(id, book) {
    this.http.put('/api' + id, this.customer)
    .subscribe(res => {
    this.router.navigate(['/']);
    }, (err) => {
    console.log(err);
    }
    );
    }
}
