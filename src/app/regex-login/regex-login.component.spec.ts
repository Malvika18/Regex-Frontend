import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexLoginComponent } from './regex-login.component';

describe('RegexLoginComponent', () => {
  let component: RegexLoginComponent;
  let fixture: ComponentFixture<RegexLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
