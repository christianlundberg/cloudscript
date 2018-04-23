import { guards } from './guards';
import { services } from './services';
import { CommonModule } from '@angular/common';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { WINDOW_PROVIDERS } from './services/window.service';
import { effects } from './store/effects';
import { reducers, CustomSerializer } from './store/reducers';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { NavbarModule } from './components/navbar/navbar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NavbarModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    MonacoEditorModule.forRoot(),
    MatSnackBarModule
  ],
  providers: [services, ...guards, WINDOW_PROVIDERS, { provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
