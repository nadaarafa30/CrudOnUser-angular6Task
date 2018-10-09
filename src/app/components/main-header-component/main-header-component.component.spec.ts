import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderComponentComponent } from './main-header-component.component';

describe('MainHeaderComponentComponent', () => {
  let component: MainHeaderComponentComponent;
  let fixture: ComponentFixture<MainHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
