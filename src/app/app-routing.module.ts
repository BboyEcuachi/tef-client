import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'projects/auth/src/lib/components/login/login.component';
import { AuthGuard } from 'projects/auth/src/lib/guards/auth.guard';
import { HomeComponent } from './shared/home/home.component';
import { MasterComponent } from './shared/master/master.component';
import { TransfersComponent } from './shared/transfers/transfers.component';

const routes: Routes = [
	{
		path: '',
		component: MasterComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'home',
				component: HomeComponent,
			},
			{
				path: 'transfers',
				component: TransfersComponent,
			}
		]
	},
	{
		path: '',
		children: [
			{
				path: 'login',
				component: LoginComponent
			}
		]
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
