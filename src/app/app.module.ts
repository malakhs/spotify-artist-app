import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { SpotifyAuthModule } from 'src/auth-module';
import { AppRouteGuard } from 'src/shared/services/app-route-guard';
import { SpotifyService } from 'src/shared/services/spofity-service';
import { ArtistComponent } from './artist/artist.component';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from 'src/shared/services/auth-interceptor';

import { SortByPipe } from 'src/shared/pipes/sort-by.pipe';
const routes: Routes = [

    { path: 'login', component: LoginComponent },
     { path: 'search', component: SearchComponent, canActivate: [ AppRouteGuard]},
      { path: 'search/:artist', component: SearchComponent, canActivate: [ AppRouteGuard]},
     {path: 'artist/:id', component: ArtistComponent, canActivate: [ AppRouteGuard]},
     { path: '', redirectTo: 'login', pathMatch: 'full'},
     {path: '**', component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    LoginComponent,
    SearchComponent,
    ArtistComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    SpotifyAuthModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    FormsModule,
  ],
  exports: [RouterModule],
 providers: [ SpotifyService, AppRouteGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
