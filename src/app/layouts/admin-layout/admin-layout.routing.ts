import { Routes } from "@angular/router";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { AuthGuard } from "app/guards/auth.guard";
import { HomeComponent } from "app/pages/home/home.component";
import { GroupsShowComponent } from "app/pages/groups/groups-show/groups-show.component";
import { GroupsCreateComponent } from "app/pages/groups/groups-create/groups-create.component";
import { UsersCreateComponent } from "app/pages/users/users-create/users-create.component";
import { UsersShowComponent } from "app/pages/users/users-show/users-show.component";
import { IntegrationBranchesComponent } from "app/pages/branches/integration-branches/integration-branches.component";
import { IntegrationUsersComponent } from "app/pages/users/integration-users/integration-users.component";
import { EditBranchComponent } from "app/pages/branches/edit-branch/edit-branch.component";

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
    path: "user-groups",
    component: GroupsShowComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      roles: ["user-groups"],
      useParams: false,
    },
  },
  {
    path: "user-groups/create-group/:id",
    component: GroupsCreateComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      roles: ["user-groups"],
      useParams: false,
    },
  },
  {
    path: "user-admin",
    component: UsersShowComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      roles: ["user-groups"],
      useParams: false,
    },
  },
  {
    path: "user-admin/create-user/:id",
    component: UsersCreateComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      roles: ["user-admin"],
      useParams: false,
    },
  },
  {
    path: "integrations/users",
    component: IntegrationUsersComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      roles: ["integrations/users"],
      useParams: false,
    },
  },
  {
    path: "show-branches",
    component: IntegrationBranchesComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      roles: ["show-branches"],
      useParams: false,
    },
  },
  {
    path: "edit-branch/:id",
    component: EditBranchComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      roles: ["show-branches"],
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
