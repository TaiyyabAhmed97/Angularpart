import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustsComponent } from './custs/custs.component';
import { CustCreateComponent } from './cust-create/cust-create.component';
import { CustDetailComponent } from './cust-detail/cust-detail.component';
import { CustEditComponent } from './cust-edit/cust-edit.component';
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
    CustEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
