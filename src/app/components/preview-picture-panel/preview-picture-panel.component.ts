import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-picture-panel',
  templateUrl: './preview-picture-panel.component.html',
  styleUrls: ['./preview-picture-panel.component.scss']
})
export class PreviewPicturePanelComponent implements OnInit {

  @Input() logoUrls: string[];

  calculatedView: "one"| "twoAndMore"| "four"| "unlimited";

  constructor() { 
  }
  
  ngOnInit(): void {
    if (this.logoUrls.length === 1) {
      this.calculatedView = "one";
    } else if (this.logoUrls.length > 0 && this.logoUrls.length < 4) {
      this.calculatedView = "twoAndMore";
    } else if (this.logoUrls.length === 4) {
      this.calculatedView = "four";
    } else if (this.logoUrls.length > 4) {
      this.calculatedView = "unlimited";
    }
  }

}
