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
  RacketsArray: any;
  ret: any;
  id: any;

  // we will use form builder to simplify our syntax
  constructor(private _fb: FormBuilder, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    // we will initialize our form here
    this.getCustDetail(this.route.snapshot.params['id']);
    this.myForm = this._fb.group({
      rackets: this._fb.array([
        this.initRackets(),
      ]),
      date: Date
    });
  }

  getCustDetail(id) {
    this.http.get('api/' + id).subscribe(data => {
      this.cust = data;
    });
  }

  save(model: any) {
    // call API to save customer
    /*
    this.http.post('api/d', this.ParseArray(model.controls.rackets.value))
    .subscribe(res => {
      this.router.navigate(['api/']);
    }, (err) => {
      console.log(err);
    }
  );*/
    var arr = [];
    for (var i = 0; i < model.controls.rackets.value.length; i++) {
      arr.push(model.controls.rackets.value[i].name);
    }
    console.log(arr);
    console.log(model.controls.date.value);
    var d1 = model.controls.date.value;
    //console.log(this.ret);
    /*for(var i =0;i<model.rackets.length;i++)
      {
        console.log("im alive");
      }*/
    var Demo = {
      Rackets: arr,
      CheckedOut: Date,
      ReturnDate: d1
    };


    this.http.post('api/d', Demo)
      .subscribe(res => {
        this.id = res;
      }, (err) => {
        console.log(err);
      }
      );
      var Transaction = {
        Customer: this.route.snapshot.params['id'],
        Demo: this.id
      }
      this.http.post('api/c', Transaction)
        .subscribe(res => {
          this.router.navigate(['/demos']);
        }, (err) => {
          console.log(err);

        }
        );
  }


  initRackets() {
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

  ParseArray(arr) {
    var arr1 = Array();
    for (var i = 0; i < arr.length; i++) {
      arr1.push(arr[i].name);
    }
    return arr1;
  }

}
