import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    activated: ActivatedRouteSnapshot,
  ): Observable<boolean> | boolean {
    return this.isUserAuthenticated(activated);
  }

  private isUserAuthenticated(
    activated: ActivatedRouteSnapshot
  ): Observable<boolean> {
    if (this.authService.getToken()) {
      if (
        typeof activated.data["roles"] !== "undefined" &&
        activated.data["roles"].length
      ) {
        const rolesRoute = activated.data["roles"];

        let params = activated.params;
        let useParams = activated.data["useParams"];
        const roles = JSON.parse(localStorage.getItem("vszfx"));

        let permission_user = [];
        roles.menu.forEach((element) => {
          permission_user.push(element.path);
          if (element.type !== "link") {
            element.submenus.forEach((element2) => {
              permission_user.push(element2.path);
            });
          }
        });

        return new Observable<boolean>((subscriber) => {
          if (
            !this.checkPermission(
              rolesRoute,
              permission_user,
              useParams,
              params
            )
          ) {
            subscriber.next(false);
            this.router.navigate(["/access-denied"]);
          } else {
            subscriber.next(true);
          }
        });
      }
      return new Observable<boolean>((subscriber) => subscriber.next(true));
    }
    this.router.navigate(["auth"]);
    return new Observable<boolean>((subscriber) => subscriber.next(false));
  }

  checkPermission(
    rolesRoute: string[],
    permission_user: string[],
    useParams,
    params
  ) {
    for (let role of rolesRoute) {
      if (useParams) {
        if (permission_user.includes(role + "/" + params.id)) {
          return true;
        } else {
          return false;
        }
      } else {
        if (permission_user.includes(role)) {
          return true;
        }
      }
    }
    return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // return this.isUserAuthenticated();
    return true;
  }
}
