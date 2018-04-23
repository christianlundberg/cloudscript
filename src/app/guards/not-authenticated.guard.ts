import { take } from 'rxjs/operators/take';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { isLoaded, isNotAuthenticated } from '../store/selectors/authentication.selectors';
import { AppState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotAuthenticatedGuard implements CanLoad {

    constructor(private store: Store<AppState>, private router: Router, private snackbar: MatSnackBar) { }

    canLoad() {
        return this.store.select(isNotAuthenticated).pipe(
            withLatestFrom(this.store.select(isLoaded)),
            filter(([isNotAuthenticated, isLoaded]) => isLoaded),
            map(([isNotAuthenticated]) => {
                if (isNotAuthenticated)
                    return isNotAuthenticated;

                this.snackbar.open("You're already authenticated!", null, {duration: 2000});
                this.router.navigate(['/projects']);
                return isNotAuthenticated;
            }),
            take(1)
        )
    }
}