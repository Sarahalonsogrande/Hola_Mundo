import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoltorioComponent } from './envoltorio.component';

describe('EnvoltorioComponent', () => {
  let component: EnvoltorioComponent;
  let fixture: ComponentFixture<EnvoltorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvoltorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvoltorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
