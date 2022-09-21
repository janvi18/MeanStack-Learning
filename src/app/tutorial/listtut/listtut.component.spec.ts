import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtutComponent } from './listtut.component';

describe('ListtutComponent', () => {
  let component: ListtutComponent;
  let fixture: ComponentFixture<ListtutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
