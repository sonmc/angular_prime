export const menus = [
  {
    label: "Home",
    items: [
      { label: "Dashboard", icon: "pi pi-fw pi-home", routerLink: ["/"] },
    ],
  },
  {
    label: "Pages",
    icon: "pi pi-fw pi-briefcase",
    routerLink: ["/pages"],
    items: [
      {
        label: "Auth",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "Login",
            icon: "pi pi-fw pi-sign-in",
            routerLink: ["/auth/login"],
          },
        ],
      },
      {
        label: "User Management",
        icon: "pi pi-fw pi-user",
        routerLink: ["pages/users"],
      },
    ],
  },
];