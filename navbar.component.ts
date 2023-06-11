import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
  openNav() {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
      sidenav.style.width = '250px';
    }
  }

  closeNav() {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
      sidenav.style.width = '0';
    }
  }
}
