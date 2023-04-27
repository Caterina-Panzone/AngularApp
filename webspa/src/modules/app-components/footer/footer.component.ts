import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/modules/shared/services/security.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
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
