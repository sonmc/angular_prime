import { Component, ElementRef } from "@angular/core";
import { menus } from "../app.menu";
import { MenuItem } from "primeng/api";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppMenuitem } from "./app.menuitem";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  templateUrl: "./sidebar.component.html",
})
export class AppSidebar {
  model: MenuItem[] = [];
  constructor(public el: ElementRef) { }
  ngOnInit() {
    this.model = menus;
  }


}
