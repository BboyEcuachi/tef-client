import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'projects/auth/src/public-api';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.sass']
})
export class MasterComponent {
  public loggedIn = false;

	constructor(
		private readonly authService: AuthService,
		private readonly router: Router
	) {}

	ngOnInit() {
		this.loggedIn = !!this.authService.currentUserValue;
	}

	public logout(): void {
		this.authService.logout();
		this.router.navigate(['/login']);
	}
}
