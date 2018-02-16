import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Demo } from './demo.interface';

@Component({
  selector: 'app-demo-create',
  templateUrl: './demo-create.component.html',
  styleUrls: ['./demo-create.component.css']
})
export class DemoCreateComponent implements OnInit {
  public myForm: FormGroup; // our form model
  cust: any;

  // we will use form builder to simplify our syntax
  constructor(private _fb: FormBuilder, private router: Router , private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
  // we will initialize our form here
  this.getCustDetail(this.route.snapshot.params['id']);
  this.myForm = this._fb.group({
    rackets: this._fb.array([
        this.initRackets(),
    ])
});
  }

  getCustDetail(id) {
    this.http.get('api/' + id).subscribe(data => {
      this.cust = data;
    });
  }

  save(model: Demo) {
      // call API to save customer
      console.log(model);
  }


  initRackets(){
    return this._fb.group({
      name: ['']
  });
  }


  addRackets() {
    // add address to the list
    const control = <FormArray>this.myForm.controls['rackets'];
    control.push(this.initRackets());
}


removeRackets(i: number) {
  // remove address from the list
  const control = <FormArray>this.myForm.controls['rackets'];
  control.removeAt(i);
}


}
