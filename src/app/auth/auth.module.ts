import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule} from "@nebular/theme";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType} from "@nebular/auth";
import {HttpClientModule} from "@angular/common/http";
import {CallbackComponent} from "./callback/callback.component";


const authRoutes: Routes = [
    { path:'', component: AuthComponent,
      children: [
        { path:'login', component: LoginComponent },
        { path:'callback', component: CallbackComponent },
        { path:'**', redirectTo: 'login' },
        { path:'', redirectTo: 'login', pathMatch: 'full' }
      ]
    },
  ]


@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        CallbackComponent
    ],
    imports: [
    RouterModule.forChild(authRoutes),
    
    NbLayoutModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,

    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: '819749465951-79tf7a9lqvi4fho2cbro4qc1kpihl68p.apps.googleusercontent.com',
          clientSecret: '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',
          authorize: {
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope: 'https://www.googleapis.com/auth/userinfo.profile',

            redirectUri: 'http://localhost:4200/auth/callback',
          },
        }),
      ],
    }),
    
    ]
})


export class AuthModule {}