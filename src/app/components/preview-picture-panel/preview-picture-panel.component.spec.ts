import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPicturePanelComponent } from './preview-picture-panel.component';

describe('PreviewPicturePanelComponent', () => {
  let component: PreviewPicturePanelComponent;
  let fixture: ComponentFixture<PreviewPicturePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewPicturePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPicturePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
