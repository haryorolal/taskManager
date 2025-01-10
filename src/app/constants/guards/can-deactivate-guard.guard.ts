import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuardGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
