import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookumblenceComponent } from './bookumblence.component';

describe('BookumblenceComponent', () => {
  let component: BookumblenceComponent;
  let fixture: ComponentFixture<BookumblenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookumblenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookumblenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
