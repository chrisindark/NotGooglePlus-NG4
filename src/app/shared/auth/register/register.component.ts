import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiService } from '../../api.service';


@Component({
  selector: 'app-register',
  template: `
    <div class="modal fade my-modal" #registerModal=""
         tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" (onHidden)="onHidden()">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" (click)="closeModal()">
              <i class="material-icons">close</i>
            </button>
            <h2 class="text-center no-margin">Register</h2>
          </div>

          <div class="modal-body">
            <form ngNativeValidate #registerForm="ngForm" (ngSubmit)="onSubmit()">
              <div class="alert alert-danger" *ngFor="let error of errors.non_field_errors">
                <span [innerHTML]="error"></span>
              </div>

              <div class="form-group no-margin" [ngClass]="{'has-error': errors.email}">
                <label for="email" class="control-label">Email</label>
                <input type="email" class="form-control" id="email" name="email"
                       [(ngModel)]="model.email" placeholder="ex. joy@notgoogle.com" required>
                <span class="help" *ngIf="errors.email"
                      [innerHtml]="errors.email"></span>
              </div>

              <div class="form-group no-margin" [ngClass]="{'has-error': errors.username}">
                <label for="username" class="control-label">Username</label>
                <input type="text" class="form-control" id="username" name="username"
                       [(ngModel)]="model.username" placeholder="ex. joy@notgoogle.com" required>
                <span class="help" *ngIf="errors.username"
                      [innerHtml]="errors.username"></span>
              </div>

              <div class="form-group no-margin" [ngClass]="{'has-error': errors.password}">
                <label for="password" class="control-label">Password</label>
                <input type="password" class="form-control" id="password" name="password"
                       [(ngModel)]="model.password" placeholder="ex. thisisnotgoogleplus" required>
                <span class="help" *ngIf="errors.password"
                      [innerHtml]="errors.password"></span>
              </div>

              <div class="form-group no-margin" [ngClass]="{'has-error': errors.confirm_password}">
                <label for="confirm_password" class="control-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirm_password" name="confirm_password"
                       [(ngModel)]="model.confirm_password" placeholder="ex. thisisnotgoogleplus" required>
                <span class="help" *ngIf="errors.confirm_password"
                      [innerHtml]="errors.confirm_password"></span>
              </div>

              <div class="form-group no-margin" style="padding-top: 10px;">
                <button type="submit" class="btn btn-raised btn-primary btn-block">Sign Up</button>
                <a href="javascript:void(0)" class="pull-right" (click)="openLoginModal()">Already a member? Login</a>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <br>
          </div>
        </div>
      </div>
    </div>
  `
})

export class RegisterComponent {
  @ViewChild ('registerForm') registerForm: NgForm;

  @Output() openModalEvent = new EventEmitter();

  openLoginModalBool = false;
  openForgotPasswordModalBool = false;
  submitted = false;
  model = {};
  errors: Object = {};

  constructor(
    private apiService: ApiService,
  ) {}

  openModal(): void {
    // this.registerModal.show();
  }

  closeModal(): void {
    // this.registerModal.hide();
    this.registerForm.resetForm();
  }

  openLoginModal(): void {
    this.closeModal();
    this.openLoginModalBool = true;
  }

  public onHidden(): void {
    if (this.openLoginModalBool) {
      this.openLoginModalBool = !this.openLoginModalBool;
      this.openModalEvent.emit('login');
    }
  }

  onSubmit(): void {
    // validate something if needed
    this.doSubmit(this.model);
  }

  doSubmit(data) {
    this.submitted = true;
    // this.http.post(url, data)
    //   .toPromise()
    //   .then(response => {
    //     console.log(response.json());
    //     this.submitted = false;
    //   })
    //   .catch(error => {
    //     this.errors = error.json();
    //     console.log(this.errors);
    //     this.submitted = false;
    //   });
  }

}
