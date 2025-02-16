import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Security Tools';

  ngOnInit() {

  }

  showHideMenu(){
    var navbarElement = document.getElementById("navbar");
    if (navbarElement){
      navbarElement.className === "navbar" ? navbarElement.className += " responsive" : navbarElement.className = "navbar";
    }
  }
}

