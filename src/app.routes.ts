import { Routes } from "@angular/router";
import { AppLayout } from "./app/layout/app.layout";
import { Dashboard } from "./app/pages/dashboard/dashboard";

export const appRoutes: Routes = [
  {
    path: "",
    component: AppLayout,
    children: [
      { path: "", component: Dashboard },
      { path: "pages", loadChildren: () => import("./app/pages/pages.routes") },
    ],
  },
  { path: "auth", loadChildren: () => import("./app/pages/auth/auth.routes") },
  { path: "**", redirectTo: "/notfound" },
];
