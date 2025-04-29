import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

import { SelectButtonModule } from "primeng/selectbutton";

@Component({
  selector: "app-user-profile",
  standalone: true,
  imports: [CommonModule, FormsModule, SelectButtonModule],
  templateUrl: './user-profile.component.html',
  host: { class: "hidden absolute top-[3.25rem] right-0 w-72 p-4 bg-surface-0 dark:bg-surface-900 border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]", },
})
export class UserProfileComponent {
  constructor(private readonly router: Router) { }

  onProfileClick() {
    this.router.navigate(['/profile']);
  }


  onLogoutClick() {
    console.log('Logout clicked');
  }
}
