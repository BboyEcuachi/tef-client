import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string | undefined;
  error: string | undefined;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({ 
      username: ['bboyecuachi', Validators.required],
      password: ['hola123', Validators.required]
    });
  }
  
  ngOnInit() {
    this.authService.logout();  
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  get f() { 
    return this.loginForm?.controls;
  }
    
  onSubmit() {
    this.submitted = true;
    
    if (this.loginForm?.invalid) return;
    
    this.authService
      .login(this.f?.['username']?.value, this.f?.['password']?.value)
      .pipe(first())
      .subscribe(data => {
        this.error = '';
        this.router.navigate([this.returnUrl]);
      }, (error) => this.error = error);
  }
}

