import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustsComponent } from './custs/custs.component';
import { CustCreateComponent } from './cust-create/cust-create.component';
import { CustDetailComponent } from './cust-detail/cust-detail.component';
const appRoutes: Routes = [
  {
    path: 'custs',
    component: CustsComponent,
    data: { title: 'Customer List' }
  },
  {
    path: 'book-details/:id',
    component: CustDetailComponent,
    data: { title: 'Customer Details' }
  },
  { path: '',
    redirectTo: '/custs',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustsComponent,
    CustCreateComponent,
    CustDetailComponent
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
