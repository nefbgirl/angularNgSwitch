import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {jsPDF} from "jspdf";
import { SignaturePad } from 'angular2-signaturepad';
import { DomSanitizer } from '@angular/platform-browser';
import { DeviceService } from '../device.service';
import { DeviceObject } from '../common/device.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DeviceDetailsComponent implements OnInit {

  @ViewChild('content', {static: false}) el!: ElementRef;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  id: string;
  imgBase64: string
  imageUrl; //rename imageFileBinary to imageUrl
  isSigned:boolean;

  deviceObject: DeviceObject;
  deviceObject$: Observable<DeviceObject>;


  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };


  constructor(private activateRoute: ActivatedRoute,
              private sanitizer:DomSanitizer,
              private deviceService: DeviceService) { 

                this.id = this.activateRoute.snapshot.params['id'];

                // const sub = this.deviceService.getById(this.id).subscribe((x) => {
                //   this.deviceObject = x;
                // });

                this.deviceObject$ = this.deviceService.getById(this.id);
              }

  ngOnInit(): void {



  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }


    makePDF(){

      let pdf = new jsPDF('p','pt','a4');
      pdf.html(this.el.nativeElement, {
        callback: (pdf) => {
          pdf.save('device.pdf');
        }

      });
  }

  onSigned(){
    this.isSigned = !this.isSigned;
  }
  
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log("drawComplete",this.signaturePad.toDataURL());

    this.imgBase64 = this.signaturePad.toDataURL();

     this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imgBase64);

  }

  transform(){

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imgBase64);

  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }


}
