import { Injectable } from '@angular/core';
import { IConfiguration } from '../models/configuration.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  serverSettings?: IConfiguration;
  private settingsLoadedSource = new Subject<IConfiguration>();
  settingsLoaded$ = this.settingsLoadedSource.asObservable();

  constructor() { }

  load(): void {
    this.serverSettings = {
      basketUrl: '',
      catalogUrl: 'http://localhost:3000/catalog',
      ordersUrl: '',
      identityUrl: ''
    };
    this.settingsLoadedSource.next(this.serverSettings);
  }
}
