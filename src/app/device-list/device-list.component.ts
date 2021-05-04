import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Subscription, Observable } from 'rxjs';
import { DeviceObject } from '../common/device.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  deviceObject: DeviceObject;
  displayedColumns: string[] = ['id', 'name', 'model', 'serial'];
  // dataSource = new DeviceService(this.deviceService);

  constructor(private deviceService: DeviceService,
              private router: Router) {

      this.deviceService.find().subscribe((x) => {
        this.deviceObject = x;
      });
  

   }

  ngOnInit(): void {}


  goToDetail(id: string){

    this.router.navigateByUrl(`detail/${id}`);

  }

  

}
