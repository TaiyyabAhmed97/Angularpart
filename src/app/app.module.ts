import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustsComponent } from './custs/custs.component';
const appRoutes: Routes = [
  {
    path: 'custs',
    component: CustsComponent,
    data: { title: 'Customer List' }
  },
  { path: '',
    redirectTo: '/custs',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustsComponent
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
