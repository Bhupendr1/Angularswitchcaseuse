import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'switchpro';
  Selectedproduct:any;
  Data(event:any){
this.Selectedproduct=event.target.value
  }
}
