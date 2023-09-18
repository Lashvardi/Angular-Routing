import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public authValues = {
    email: '',
    password: '',
  };

  handleAuth() {
    this.generateToken(this.authValues.email, this.authValues.password);

    alert('ავტორიზაცია მოხდა');
  }
  constructor(private router: Router) {}

  generateToken(email: string, password: string) {
    const token = `${email}:${password}`;

    localStorage.setItem('token', token);

    // this.router.navigate(['/dashboard'], {
    //   queryParams: { email: email, password: password },
    // });
  }
}
