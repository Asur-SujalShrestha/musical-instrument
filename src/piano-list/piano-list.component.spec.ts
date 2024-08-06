import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoListComponent } from './piano-list.component';

describe('PianoListComponent', () => {
  let component: PianoListComponent;
  let fixture: ComponentFixture<PianoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PianoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
