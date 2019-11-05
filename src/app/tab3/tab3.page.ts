import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  
  showFlipCameraButton : boolean;
  showTorchButton: boolean;
  torchOn: boolean;
  disableAnimations: boolean;
  disableSuccessBeep: boolean;
  
  constructor(private settings: Storage) {}

  toggleSetting(setting: string, event: any){
    console.log("setting : " + event);
    this.settings.set(setting, event);
    this.settings.get(setting)
      .then((value)=>{
        console.log("Setting: " + setting + " " + value);
    })
  }
}