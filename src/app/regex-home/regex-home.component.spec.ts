import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexHomeComponent } from './regex-home.component';

describe('RegexHomeComponent', () => {
  let component: RegexHomeComponent;
  let fixture: ComponentFixture<RegexHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
