import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../shared/services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isAuthorized: boolean = false;

  constructor(private securityService: SecurityService) {}

  ngOnInit(): void {
    this.securityService.authenticationChanged$.subscribe(
      (res) => (this.isAuthorized = res)
    );
  }

  login(): void {
    this.securityService.Authorize();
  }
}
