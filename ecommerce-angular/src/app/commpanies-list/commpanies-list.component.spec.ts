import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommpaniesListComponent } from './commpanies-list.component';

describe('CommpaniesListComponent', () => {
  let component: CommpaniesListComponent;
  let fixture: ComponentFixture<CommpaniesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommpaniesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommpaniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
