import { Routes } from "@angular/router";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { AuthGuard } from "app/guards/auth.guard";
import { HomeComponent } from "app/pages/home/home.component";
import { UsersCreateComponent } from "app/pages/users/users-create/users-create.component";
import { UsersShowComponent } from "app/pages/users/users-show/users-show.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "user-profile",
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: "user-admin",
    component: UsersShowComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      useParams: false,
    },
  },
  {
    path: "user-admin/create-user/:id",
    component: UsersCreateComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      useParams: false,
    },
  },
  {
    path: "profile",
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
];
