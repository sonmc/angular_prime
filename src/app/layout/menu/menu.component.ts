import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenuItem } from "primeng/api";
import { AppMenuitem } from "../app.menuitem";
import { menus } from "../app.menu";

@Component({
    selector: "app-menu",
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './menu.component.html',
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = menus;
    }
}
