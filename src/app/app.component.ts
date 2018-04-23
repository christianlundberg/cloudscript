import { getUser, isLoaded } from './store/selectors/authentication.selectors';
import { Observable } from 'rxjs/Observable';
import { AppState } from './store/reducers';
import { isLandingPage } from './store/selectors/router.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as authenticationActions from './store/actions/authentication.actions';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user$: Observable<User>;

  loaded$: Observable<boolean>;

  isLandingPage$: Observable<boolean>;

  constructor(private store: Store<AppState>, private afAuth: AngularFireAuth) {
    this.user$ = this.store.select(getUser);
    this.loaded$ = this.store.select(isLoaded);
    this.isLandingPage$ = this.store.select(isLandingPage);
  }

  ngOnInit() {
    this.store.dispatch(new authenticationActions.GetUser());

    this.afAuth.authState.subscribe(user => this.store.dispatch(new authenticationActions.GetUserSuccess(user)));
  }

  onSignOut(){
    this.store.dispatch(new authenticationActions.SignOut());
  }

}
