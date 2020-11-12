import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  // userProfile: UserProfile = {};
  constructor(private router: Router) {}

  ngOnInit(): void {}

  backToProfile = (): void => {
    this.router.navigate(['/profile']);
  };
}
