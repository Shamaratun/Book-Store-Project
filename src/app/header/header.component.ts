import { Component } from '@angular/core';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-header',
  imports: [DashboardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
