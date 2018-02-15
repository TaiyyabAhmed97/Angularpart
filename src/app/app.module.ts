import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustsComponent } from './custs/custs.component';
import { CustCreateComponent } from './cust-create/cust-create.component';
import { CustDetailComponent } from './cust-detail/cust-detail.component';
import { CustEditComponent } from './cust-edit/cust-edit.component';
import { DemosComponent } from './demos/demos.component';
import { DemoCreateComponent } from './demo-create/demo-create.component';
import { RacketComponent } from './racket/racket.component';
const appRoutes: Routes = [
  {
    path: 'customers',
    component: CustsComponent,
    data: { title: 'Customer List' }
  },
  {
    path: 'cust-details/:id',
    component: CustDetailComponent,
    data: { title: 'Customer Details' }
  },
  {
    path: 'cust-create',
    component: CustCreateComponent,
    data: { title: 'Create Customer' }
  },
  {
    path: 'cust-edit/:id',
    component: CustEditComponent,
    data: { title: 'Edit Customer' }
  },
  {
    path: 'demos',
    component: DemosComponent,
    data: {title: 'Demos List'}
  },
  {
    path: 'demo-create/:id',
    component: DemoCreateComponent,
    data: {title: 'Create Demo'}
  },
  { path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustsComponent,
    CustCreateComponent,
    CustDetailComponent,
    CustEditComponent,
    DemosComponent,
    DemoCreateComponent,
    RacketComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  HttpClientModule,
  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
