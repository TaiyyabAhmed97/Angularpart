import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCreateComponent } from './demo-create.component';

describe('DemoCreateComponent', () => {
  let component: DemoCreateComponent;
  let fixture: ComponentFixture<DemoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
