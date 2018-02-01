import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustsComponent } from './custs.component';

describe('CustsComponent', () => {
  let component: CustsComponent;
  let fixture: ComponentFixture<CustsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
