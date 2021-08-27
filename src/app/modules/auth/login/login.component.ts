import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription, Observable } from "rxjs";
import { first } from "rxjs/operators";
import { UserModel } from "../_models/user.model";
import { AuthService } from "../_services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "../_services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  defaultAuth: any = {
    username: "puser",
    password: "superman",
  };
  // defaultAuth: any = {
  //   username: "admin@demo.com",
  //   password: "demo",
  // };

  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$: Observable<boolean>;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loginsvc: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit(): void {
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams["returnUrl".toString()] || "/";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: [
        this.defaultAuth.username,
        Validators.compose([
          Validators.required,
          // Validators.email,
          // Validators.minLength(3),
          // Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  // submit() {
  //   this.hasError = false;
  //   const loginSubscr = this.authService
  //     .login(this.f.username.value, this.f.password.value)
  //     .pipe(first())
  //     .subscribe((user: UserModel) => {
  //       if (user) {
  //         this.router.navigate([this.returnUrl]);
  //       } else {
  //         this.hasError = true;
  //       }
  //     });
  //   this.unsubscribe.push(loginSubscr);
  // }

  // setup for login api
  submit() {
    this.hasError = false;
    const loginobj = this.loginForm.value;
    console.log(loginobj);
    if (this.loginForm.valid) {
      this.loginsvc.loginuser(loginobj).subscribe(
        (response) => {
          console.log("response", response);
          if (response) {
            localStorage.setItem("accessToken", response);
            this.router.navigate(["./dashboard"]);
          } else {
            this.hasError = true;
          }
        },
        (error) => {
          console.log("error", error);
        }
      );
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
