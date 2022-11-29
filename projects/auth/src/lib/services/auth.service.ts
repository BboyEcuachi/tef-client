import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface ApplicationUser {
	accessToken: string;
	expiresIn: Date;
	username: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<ApplicationUser | null>;
	public currentUser: Observable<ApplicationUser | null>;
  
  constructor(private readonly http: HttpClient) {
		const currentUser = localStorage.getItem('currentUser') ?? "";
    this.currentUserSubject = new BehaviorSubject<ApplicationUser | null>(
			currentUser ? JSON.parse(currentUser) : null
		);
		this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): ApplicationUser | null {
		return this.currentUserSubject.value;
	}

  login(username: string, password: string) {
		return this.http.post<any>('/auth/login', { username, password }).pipe(
			map(user => {
				if (user && user.accessToken) {
					localStorage.setItem('currentUser', JSON.stringify(user));
					this.currentUserSubject.next(user);
				}
				return user;
			})
		);
	}

  logout() {  
    localStorage.removeItem('currentUser');  
    this.currentUserSubject.next(null);
  }

}
