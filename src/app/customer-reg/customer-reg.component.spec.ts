import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerREGComponent } from './customer-reg.component';

describe('CustomerREGComponent', () => {
  let component: CustomerREGComponent;
  let fixture: ComponentFixture<CustomerREGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerREGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerREGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
