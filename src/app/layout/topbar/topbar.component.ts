import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { StyleClassModule } from "primeng/styleclass";
import { LayoutService } from "../../shared/services/layout.service";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { updatePreset } from "@primeng/themes";

@Component({
  selector: "app-topbar",
  standalone: true,
  imports: [RouterModule, CommonModule, StyleClassModule, UserProfileComponent],
  templateUrl: "./topbar.component.html",
})
export class AppTopbar {
  items!: MenuItem[];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.applyTheme();
  }
  applyTheme() {
    const palette = {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    }
    const preset = {
      semantic: {
        primary: palette,
        colorScheme: {
          light: {
            primary: {
              color: "{primary.500}",
              contrastColor: "#ffffff",
              hoverColor: "{primary.600}",
              activeColor: "{primary.700}",
            },
            highlight: {
              background: "{primary.50}",
              focusBackground: "{primary.100}",
              color: "{primary.700}",
              focusColor: "{primary.800}",
            },
          },
          dark: {
            primary: {
              color: "{primary.400}",
              contrastColor: "{surface.900}",
              hoverColor: "{primary.300}",
              activeColor: "{primary.200}",
            },
            highlight: {
              background:
                "color-mix(in srgb, {primary.400}, transparent 84%)",
              focusBackground:
                "color-mix(in srgb, {primary.400}, transparent 76%)",
              color: "rgba(255,255,255,.87)",
              focusColor: "rgba(255,255,255,.87)",
            },
          },
        },
      },
    }
    updatePreset(preset);
  }
}
