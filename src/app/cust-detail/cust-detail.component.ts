import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cust-detail',
  templateUrl: './cust-detail.component.html',
  styleUrls: ['./cust-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustDetailComponent implements OnInit {

cust = {};
  constructor(private router: Router , private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getCustDetail(this.route.snapshot.params['id']);
  }

  getCustDetail(id) {
    this.http.get('api/' + id).subscribe(data => {
      this.cust = data;
    });
  }

  deleteCustomer(id) {
    this.http.delete('api/' + id)
      .subscribe(res => {
          this.router.navigate(['/custs']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}



