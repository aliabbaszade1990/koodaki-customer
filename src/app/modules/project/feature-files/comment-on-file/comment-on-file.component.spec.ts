import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentOnFileComponent } from './comment-on-file.component';

describe('CommentOnFileComponent', () => {
  let component: CommentOnFileComponent;
  let fixture: ComponentFixture<CommentOnFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentOnFileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentOnFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
