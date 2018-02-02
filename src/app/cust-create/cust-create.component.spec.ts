import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustCreateComponent } from './cust-create.component';

describe('CustCreateComponent', () => {
  let component: CustCreateComponent;
  let fixture: ComponentFixture<CustCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
