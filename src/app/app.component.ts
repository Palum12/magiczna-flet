import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened: boolean = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  title = 'magiczna-flet';

  sideClick(): void {
    this.sidenav.toggle();
  }
}
