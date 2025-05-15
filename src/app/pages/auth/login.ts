import { Component } from "@angular/core";
import {
  CORE_MODULES,
  FORM_MODULES,
  DATA_DISPLAY_MODULES,
  DIALOG_MODULES,
  LAYOUT_MODULES,
} from "../../shared/shared-imports";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    ...CORE_MODULES,
    ...FORM_MODULES,
    ...DATA_DISPLAY_MODULES,
    ...DIALOG_MODULES,
    ...LAYOUT_MODULES,
  ],
  templateUrl: "./login.component.html",
})
export class Login {
  email: string = "";

  password: string = "";

  checked: boolean = false;
}
