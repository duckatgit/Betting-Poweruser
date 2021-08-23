import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  Url = environment.base_url + "/login-service" + "/api/login";

  constructor(private http: HttpClient) {}
  loginuser(data: any) {
    return this.http.post(this.Url, data, { responseType: "text" });
  }
}
