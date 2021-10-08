import { Injectable, OnDestroy } from "@angular/core";
import { Observable, BehaviorSubject, of, Subscription } from "rxjs";
import { map, catchError, switchMap, finalize } from "rxjs/operators";
import { UserModel } from "../_models/user.model";
import { AuthModel } from "../_models/auth.model";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnDestroy {
  Url = environment.base_url + "/login-service" + "/api/auth/login";

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private authLocalStorageToken = "accessToken";

  // public fields
  currentUser$: Observable<any>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<UserModel>;
  isLoadingSubject: BehaviorSubject<boolean>;

  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: any) {
    this.currentUserSubject.next(user);
  }

  constructor(private router: Router, private http: HttpClient) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserModel>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    // const subscr = this.getUserByToken().subscribe();
    // this.unsubscribe.push(subscr);
  }

  // public methods
  login(data): Observable<any> {
    this.isLoadingSubject.next(true);
    return this.http.post(this.Url, data, { responseType: "text" }).pipe(
      map((auth: any) => {
        const result = this.setAuthFromLocalStorage(auth);
        return result;
      }),
      // switchMap(() => this.getUserByToken()),
      catchError((err) => {
        console.error("err", err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  // new changes
  getToken() {
    return localStorage.getItem("accessToken");
  }
  isLoggedIn(): boolean {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
    // return this.getToken() !== null;
  }
  logout() {
    localStorage.clear();
    this.currentUserValue(null);
    this.router.navigate(["./auth/login"]);
  }

  getUserByToken(): Observable<any> {
    this.isLoadingSubject.next(true);
    return this.http
      .get(environment.base_url + "/user-service/api/users/profile")
      .pipe(
        map((user: any) => {
          if (user) {
            this.currentUserSubject = new BehaviorSubject<any>(user);
          } else {
            this.logout();
          }
          return user;
        }),
        finalize(() => this.isLoadingSubject.next(false))
      );
  }

  // private methods
  private setAuthFromLocalStorage(auth: string): boolean {
    // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (auth) {
      localStorage.setItem(this.authLocalStorageToken, auth);
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
