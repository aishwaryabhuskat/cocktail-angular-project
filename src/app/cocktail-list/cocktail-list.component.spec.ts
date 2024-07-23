import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cocktailListComponent } from './cocktail-list.component';

describe('cocktailListComponent', () => {
  let component: cocktailListComponent;
  let fixture: ComponentFixture<cocktailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [cocktailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(cocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
