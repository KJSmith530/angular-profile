import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Kyle Smith',
    contact: 'kjsmith530@gmail.com',
    bio: 'I play video games',
  };
  constructor() {}

  getUserProfile = () => {
    return this.userProfile;
  };

  // setUserProfile = () => {
  //   return this.service.setUserProfile();
  // };
}
