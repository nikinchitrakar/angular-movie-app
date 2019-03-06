import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = new FormControl('');
  
  constructor(private router: Router){  }

  showList(){
    this.router.navigate(['list',this.name.value]);
  }
 
}
