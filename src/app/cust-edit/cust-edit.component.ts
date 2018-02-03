
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

  UpdateBook(id, data) {
    this.http.put('api/' + id, data)
      .subscribe(res => {
        const id1 = res['_id'];
        this.router.navigate(['/book-details', id1]);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
