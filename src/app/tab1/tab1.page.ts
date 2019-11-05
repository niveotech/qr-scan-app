import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  status: any;
  config: {};
  identity: {};
  barcodeScannerOptions : BarcodeScannerOptions;
  constructor(private barcodeScanner: BarcodeScanner, private settings: Storage) {
    this.getConfig();
  }
  
   async getConfig(){
    this.barcodeScannerOptions = {
      "torchOn": Boolean(await this.getSetting("torchOn").then((data)=>{return data})),
      "showFlipCameraButton": Boolean(await this.getSetting("showFlipCameraButton").then((data)=>{return data})),
      "disableAnimations": Boolean(await this.getSetting("disableAnimations").then((data)=>{return data})),
      "disableSuccessBeep": Boolean(await this.getSetting("disableSuccessBeep").then((data)=>{return data})),
      // "showFlipCameraButton": Boolean(await this.getSetting("showFlipCameraButton").then((data)=>{return data})),
      "showTorchButton": Boolean(await this.getSetting("showTorchButton").then((data)=>{return data})),
      "prompt": "Place a barcode or qrcode inside the scan area"

    }
   }

  onNgInit() {
    this.identity = {
      "NpnNumber": "",
      "FirstName": "",
      "Name": "",
      "MiddleName": "",
      "Gender": "",
      "Born": "",
      "BornIn": "",
      "Nationality": ""
    };
    console.log("Scanning")

  }
  async getSetting(setting) {

    var settingValue: boolean;
    settingValue = await this.settings.get(setting)
      .then(
        (value) => {
          settingValue = value;
          return settingValue;
        }
      );
    return settingValue;
  }

  async scan() {
    await this.getConfig();

    this.identity = {};
    this.barcodeScanner.scan(this.barcodeScannerOptions)
      .then((data) => {
        console.log("Data: " + data.text + "\n Format: " + data.format);

        try {
          this.identity = JSON.parse(data.text);
          this.status = true;
        }
        catch{
          this.status = false;
        }
      }
      );         
  }

}
