import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {PageComponent} from './pages.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbUserModule} from '@nebular/theme';
import { AuthGuard } from '../guard/auth.guard';
import {CommonModule} from '@angular/common';

const pageRoutes: Routes = [
  { path:'', component: PageComponent,
    children: [
      { path:'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path:'**', redirectTo: 'profile' },
      { path:'', redirectTo: 'profile', pathMatch: 'full' }
    ]
  },
]

@NgModule({
  declarations: [
    ProfileComponent,
    PageComponent
  ],
  imports: [
    RouterModule.forChild(pageRoutes),
    NbLayoutModule,
    CommonModule,

    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule
  ]
})
export class PagesModule { }
