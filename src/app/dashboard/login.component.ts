import {Component, ViewChild, EventEmitter, Output } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
  selector: 'app-login',
  template: `
    <div class="modal fade my-modal" bsModal #loginModal="bs-modal" [config]="{backdrop: 'static'}"
         tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" (onHidden)="onHidden()">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" (click)="closeModal()">
              <i class="material-icons">close</i>
            </button>
            <h2 class="text-center no-margin">Login</h2>
          </div>

          <div class="modal-body">
            <form ngNativeValidate #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
              <div class="alert alert-danger" *ngFor="let error of errors.non_field_errors">
                <span [innerHTML]="error"></span>
              </div>

              <div class="form-group" [ngClass]="{'has-error': errors.username}">
                <label for="username" class="control-label">Email</label>
                <input type="text" class="form-control" id="username" name="username"
                       [(ngModel)]="model.username" placeholder="ex. joy@example.com" required>
                <span class="help" *ngIf="errors.username"
                      [innerHTML]="errors.username"></span>
              </div>

              <div class="form-group" [ngClass]="{'has-error': errors.password}">
                <a href="" class="pull-right" (click)="openForgotPasswordModal()">Forgot Password?</a>
                <label for="password" class="control-label">Password</label>
                <input type="password" class="form-control" id="password" name="password"
                       [(ngModel)]="model.password" placeholder="ex. thisisnotgoogleplus" required>
                <span class="help" *ngIf="errors.password"
                      [innerHTML]="errors.password"></span>
              </div>

              <a href="javascript:void(0)" class="pull-right" (click)="openRegisterModal()">Not a member? Sign up</a>
              <div class="form-group" style="padding-top: 10px;">
                <button type="submit" class="btn btn-raised btn-primary btn-block"
                        [disabled]="submitted"
                        >Login</button>
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

export class LoginComponent {
  @ViewChild ('loginModal') loginModal: ModalDirective;
  @ViewChild ('loginForm') loginForm: NgForm;

  @Output()
  openModalEvent = new EventEmitter();

  openRegisterModalBool = false;
  openForgotPasswordModalBool = false;
  submitted = false;
  model = {};
  errors: Object = {};

  constructor(
    private http: Http
  ) {}

  openModal(): void {
    this.loginModal.show();
  }

  closeModal(): void {
    this.loginModal.hide();
    this.loginForm.resetForm();
  }

  openRegisterModal(): void {
    this.closeModal();
    this.openRegisterModalBool = true;
  }

  openForgotPasswordModal(): void {
    this.closeModal();
    this.openForgotPasswordModalBool = true;
  }

  onHidden(): void {
    if (this.openRegisterModalBool) {
      this.openRegisterModalBool = !this.openRegisterModalBool;
      this.openModalEvent.emit('register');
    }
  }

  onSubmit(): void {
    // validate something if needed
    this.doSubmit(this.model);
  }

  doSubmit(data) {
    this.submitted = true;
    const SERVER_URL = 'http://127.0.0.1:8000';
    const url = `${SERVER_URL}/api/v1/auth/login/`;
    this.http.post(url, data)
      .toPromise()
      .then(response => {
        console.log(response.json());
        this.submitted = false;
      })
      .catch(error => {
        this.errors = error.json();
        console.log(this.errors);
        this.submitted = false;
      });
  }
}
