import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexEmailComponent } from './regex-email.component';

describe('RegexEmailComponent', () => {
  let component: RegexEmailComponent;
  let fixture: ComponentFixture<RegexEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
