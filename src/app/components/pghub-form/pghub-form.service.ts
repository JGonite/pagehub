import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PghubFormResponse } from '../interfaces/pghub-form.interface';


@Injectable({
  providedIn: 'root'
})
export class PghubFormService {

  private endpointUrl = "https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws";

  constructor(private http: HttpClient) { }

  submeterForm(name: string, email: string) : Observable<PghubFormResponse>{
    const payload = {name, email};

    return this.http.post<PghubFormResponse>(this.endpointUrl, payload);
  }

}
