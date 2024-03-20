import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatRipple} from "@angular/material/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatRipple
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router =inject(Router)

  routerNavigate(url: string){
    this.router.navigateByUrl(url)
  }

}
