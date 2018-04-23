import { take } from 'rxjs/operators/take';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { isAuthenticated, isLoaded } from '../store/selectors/authentication.selectors';
import { AppState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthenticatedGuard implements CanLoad{

    constructor(private store: Store<AppState>, private router: Router, private snackbar: MatSnackBar){}

    canLoad(){
        return this.store.select(isAuthenticated).pipe(
            withLatestFrom(this.store.select(isLoaded)),
            filter(([isAuthenticated, isLoaded]) => isLoaded),
            map(([isAuthenticated]) => {
                if(isAuthenticated)
                    return isAuthenticated;
                
                this.snackbar.open("You must be authenticated!", null, {duration: 2000}); 
                this.router.navigate(['/login']);
                return isAuthenticated;
            }),
            take(1)
        )
    }
}