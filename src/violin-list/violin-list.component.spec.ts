import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolinListComponent } from './violin-list.component';

describe('ViolinListComponent', () => {
  let component: ViolinListComponent;
  let fixture: ComponentFixture<ViolinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViolinListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViolinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
