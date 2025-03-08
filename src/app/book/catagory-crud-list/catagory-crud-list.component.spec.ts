import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryCRUDListComponent } from './catagory-crud-list.component';

describe('CatagoryCRUDListComponent', () => {
  let component: CatagoryCRUDListComponent;
  let fixture: ComponentFixture<CatagoryCRUDListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatagoryCRUDListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoryCRUDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
