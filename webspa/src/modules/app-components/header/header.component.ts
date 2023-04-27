import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../shared/services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(private securityService: SecurityService) {}

  ngOnInit(): void {}

  login(): void {
    this.securityService.Authorize();
  }
}
