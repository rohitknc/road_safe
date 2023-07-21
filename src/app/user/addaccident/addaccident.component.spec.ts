import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccidentComponent } from './addaccident.component';

describe('AddaccidentComponent', () => {
  let component: AddaccidentComponent;
  let fixture: ComponentFixture<AddaccidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaccidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddaccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
