import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktaildescriptionComponents } from './cocktail-description.component';

describe('CocktaildescriptionComponents', () => {
  let component: CocktaildescriptionComponents;
  let fixture: ComponentFixture<CocktaildescriptionComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktaildescriptionComponents]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktaildescriptionComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
