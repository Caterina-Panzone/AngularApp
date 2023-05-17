import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './shared/services/configuration.service';
import { CatalogService } from './catalog/catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'webspa';

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    this.configurationService.load();
  }
}
