import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-app-angular';

  one = ["one"];
  two = ["one","two"];
  three = ["one","two","three"];
  four = ["one","two","three","four"];
  infinity = ["one","two","three","SHOULD NOT SHOWN","SHOULD NOT SHOWN","SHOULD NOT SHOWN","SHOULD NOT SHOWN","SHOULD NOT SHOWN"];
}
