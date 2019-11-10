import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  titre="Operations sur un tableau";
  Tab=[15,46,0,89,80];
   onPosition(i) {
      
     alert(i);
    
  }
  ngOnInit() {
  }

}
