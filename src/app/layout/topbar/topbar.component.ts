import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { StyleClassModule } from "primeng/styleclass";
import { LayoutService } from "../layout.service";
import { AppConfigurator } from "../theme/theme.component";

@Component({
  selector: "app-topbar",
  standalone: true,
  imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
  templateUrl: "./topbar.component.html",
})
export class AppTopbar {
  items!: MenuItem[];

  constructor(public layoutService: LayoutService) { }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }
}
