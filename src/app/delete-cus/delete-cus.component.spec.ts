import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCusComponent } from './delete-cus.component';

describe('DeleteCusComponent', () => {
  let component: DeleteCusComponent;
  let fixture: ComponentFixture<DeleteCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
