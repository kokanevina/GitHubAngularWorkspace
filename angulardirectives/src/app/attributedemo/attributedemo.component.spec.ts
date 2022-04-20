import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributedemoComponent } from './attributedemo.component';

describe('AttributedemoComponent', () => {
  let component: AttributedemoComponent;
  let fixture: ComponentFixture<AttributedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
