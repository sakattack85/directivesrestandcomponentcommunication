import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondchildComponent } from './secondchild.component';

describe('SecondchildComponent', () => {
  let component: SecondchildComponent;
  let fixture: ComponentFixture<SecondchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
