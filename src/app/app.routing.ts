import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { RegisterComponent } from "./pages/auth/register/register.component";
import { AuthGuard } from "./guards/auth.guard";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { PageAccessDeniedComponent } from "./pages/page-access-denied/page-access-denied.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "auth",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "register",
    canActivate: [AuthGuard],
    component: RegisterComponent,
    pathMatch: "full",
  },
  {
    path: "access-denied",

    component: PageAccessDeniedComponent,
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
  {
    path: "**",

    component: PageNotFoundComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
