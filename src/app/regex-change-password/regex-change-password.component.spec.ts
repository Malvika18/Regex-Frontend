import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexChangePasswordComponent } from './regex-change-password.component';

describe('RegexChangePasswordComponent', () => {
  let component: RegexChangePasswordComponent;
  let fixture: ComponentFixture<RegexChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
