import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';

import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';

export const CORE_MODULES = [
  CommonModule,
  FormsModule,
  ButtonModule,
  RippleModule,
  CheckboxModule,
  InputTextModule,
  PasswordModule,
  RouterModule
];

export const FORM_MODULES = [
  InputTextModule,
  TextareaModule,
  SelectModule,
  RadioButtonModule,
  InputNumberModule,
  InputIconModule,
  IconFieldModule
];

export const DATA_DISPLAY_MODULES = [
  TableModule,
  RatingModule,
  TagModule
];

export const DIALOG_MODULES = [
  DialogModule,
  ToastModule,
  ConfirmDialogModule
];

export const LAYOUT_MODULES = [
  ToolbarModule
];
