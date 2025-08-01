import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNewComponent } from './recipe-new.component';

describe('RecipeNewComponent', () => {
  let component: RecipeNewComponent;
  let fixture: ComponentFixture<RecipeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
