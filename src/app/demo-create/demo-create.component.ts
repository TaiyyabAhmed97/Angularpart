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
  ret: Date;

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
      console.log(model);
      console.log(this.ret);
    /*for(var i =0;i<model.rackets.length;i++)
      {
        console.log("im alive");
      }*/
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

ParseArray(arr)
{
  var arr1 = Array();
  for(var i =0;i<arr.length;i++)
  {
    arr1.push(arr[i].name);
  }
  return arr1;
}

}
