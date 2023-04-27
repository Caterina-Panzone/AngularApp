import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  public IsAuthorized: boolean = false;
  private authenticationSource = new Subject<boolean>();
  authenticationChanged$ = this.authenticationSource.asObservable();

  constructor() {}

  public Authorize(): void {
    this.IsAuthorized = true;
    this.authenticationSource.next(true);
  }
}
