import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserProfile } from '../interfaces/user-profile';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  // userProfile: UserProfile = {};
  // @Output() submitEvent = new EventEmitter<UserProfile>();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit = (form: NgForm): void => {
    let userProfile: UserProfile = {
      name: form.value.name,
      contact: form.value.contact,
      bio: form.value.bio,
    };
    // this.submitEvent.emit(userProfile);
    console.log(userProfile);
    this.router.navigate(['/profile']);
  };
}
