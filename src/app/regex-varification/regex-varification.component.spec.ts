import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexVarificationComponent } from './regex-varification.component';

describe('RegexVarificationComponent', () => {
  let component: RegexVarificationComponent;
  let fixture: ComponentFixture<RegexVarificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexVarificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
