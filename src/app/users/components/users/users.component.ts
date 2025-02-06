import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe({
      next: (user) => (this.user = user),
      error: () => this.router.navigate(['/']),
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
