import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  showFlipCameraButton: boolean;
  showTorchButton: boolean;
  torchOn: boolean;
  disableAnimations: boolean;
  disableSuccessBeep: boolean;
  dark: boolean;

  constructor(private settings: Storage) { }

  toggleSetting(setting: string, event: any) {
    console.log("setting : " + event);
    this.settings.set(setting, event);
    this.settings.get(setting)
      .then((value) => {
        console.log("Setting: " + setting + " " + value);
      })
  }

  // Query for the toggle that is used to change between themes
  // const toggle = document.querySelector('#themeToggle');

  // Listen for the toggle check/uncheck to toggle the dark class on the <body>
  toggleDarkMode(dark){
    document.body.classList.toggle('dark', this.dark);
  }

// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// // Listen for changes to the prefers-color-scheme media query
// prefersDark.addListener((e) => checkToggle(e.matches));

// // Called when the app loads
// function loadApp() {
//   checkToggle(prefersDark.matches);
// }

// // Called by the media query to check/uncheck the toggle
// function checkToggle(shouldCheck) {
//   toggle.checked = shouldCheck;
// }
}