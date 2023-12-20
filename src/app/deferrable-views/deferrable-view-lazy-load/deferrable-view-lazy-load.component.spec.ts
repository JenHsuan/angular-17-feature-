import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrableViewLazyLoadComponent } from './deferrable-view-lazy-load.component';

describe('DeferrableViewLazyLoadComponent', () => {
  let component: DeferrableViewLazyLoadComponent;
  let fixture: ComponentFixture<DeferrableViewLazyLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableViewLazyLoadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferrableViewLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
