import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public showLogin: boolean = false;

  fnShowLogin(){
    this.showLogin = !this.showLogin;
    // Additional tasks to do when showing login?
  }

  switchTheme(){
    document.querySelector('html')?.classList.toggle('theme-dark');
  }
}
