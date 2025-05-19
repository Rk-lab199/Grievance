import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const user = localStorage.getItem('user');

  return user ? true : router.createUrlTree(['/login']);
};

