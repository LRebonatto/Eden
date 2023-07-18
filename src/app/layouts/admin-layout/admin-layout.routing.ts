import {Routes} from '@angular/router';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {AuthGuard} from 'app/guards/auth.guard';
import {HomeComponent} from 'app/pages/home/home.component';
import {UsersCreateComponent} from 'app/pages/users/users-create/users-create.component';
import {UsersShowComponent} from 'app/pages/users/users-show/users-show.component';
import {ServicesShowComponent} from '../../pages/services/services-show/services-show.component';
import {ProjectsCreateComponent} from '../../pages/projects/projects-create/projects-create.component';
import {ProjectsShowComponent} from '../../pages/projects/projects-show/projects-show.component';
import {ServicesCreateComponent} from '../../pages/services/services-create/services-create.component';
import {TicketsShowComponent} from '../../pages/tickets/tickets-show/tickets-show.component';
import {TicketsCreateComponent} from '../../pages/tickets/tickets-create/tickets-create.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'user-admin',
        component: UsersShowComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        data: {
            useParams: false,
        },
    },
    {
        path: 'user-admin/create-user/:id',
        component: UsersCreateComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        data: {
            useParams: false,
        },
    },
    {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'services',
        component: ServicesShowComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'services/create-service/:id',
        component: ServicesCreateComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'projects',
        component: ProjectsShowComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'projects/create-project/:id',
        component: ProjectsCreateComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'tickets',
        component: TicketsShowComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'tickets/create-ticket/:id',
        component: TicketsCreateComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
];
