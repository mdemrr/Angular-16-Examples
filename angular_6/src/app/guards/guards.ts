import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from "@angular/router";

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log("CanActivate Guard");

  return true;
};
export const canActivatChildeGuard: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log("CanActivateChild Guard");

  return true;
};

//Sayfadan çıkışı engeller
export const canDeactivateGuard: CanDeactivateFn<any> = (
  component: any,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot
) => {
  console.log("CanDeactivate Guard");

  return true;
};

//Eşleşiyorsa ilgili component'ı açar. Örneğin admin true ise admin sayfasını açar. Örneği AppRoutingModule de mevcut
export const canMacthAdminGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return true;
};
