import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatWorldComponent } from './great-world.component';

describe('GreatWorldComponent', () => {
  let component: GreatWorldComponent;
  let fixture: ComponentFixture<GreatWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreatWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreatWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
