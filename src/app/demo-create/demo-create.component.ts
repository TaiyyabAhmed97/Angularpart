
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo-create',
  templateUrl: './demo-create.component.html',
  styleUrls: ['./demo-create.component.css']
})
export class DemoCreateComponent implements OnInit {
demos = [];
customer = {};
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
