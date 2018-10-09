import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFooterComponentComponent } from './main-footer-component.component';

describe('MainFooterComponentComponent', () => {
  let component: MainFooterComponentComponent;
  let fixture: ComponentFixture<MainFooterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFooterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
