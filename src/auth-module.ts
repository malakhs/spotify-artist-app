import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotifyAuthComponent } from 'src/app/spotify-auth.component';
import { AuthGuard } from 'src/shared/services/auth-guard';
import { TokenService } from './shared/services/token-service';
import { AuthService } from './shared/services/auth.service';

const routes: Routes = [{
  path: 'authorized',
  canActivate: [ AuthGuard ],
  component: SpotifyAuthComponent
}];

@NgModule({
  declarations: [SpotifyAuthComponent],
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, TokenService, AuthService],
})
export class SpotifyAuthModule {
  public static authRoutes(): Routes {
    return routes;
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SpotifyAuthModule,
      providers: [
      ]
    };
  }
}
