import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { Observable } from 'rxjs';
import { DeviceObject } from './common/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) { }
  
  find(): Observable<DeviceObject>{
    return this.httpClient.get<DeviceObject>(`https://609049313847340017021319.mockapi.io/device`);

  }

  getById(id: string) :Observable<DeviceObject>{
    return this.httpClient.get<DeviceObject>(`https://609049313847340017021319.mockapi.io/device/${id}`);
  }
}

