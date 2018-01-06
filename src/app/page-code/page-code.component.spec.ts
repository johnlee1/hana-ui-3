import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCodeComponent } from './page-code.component';

describe('PageCodeComponent', () => {
  let component: PageCodeComponent;
  let fixture: ComponentFixture<PageCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
