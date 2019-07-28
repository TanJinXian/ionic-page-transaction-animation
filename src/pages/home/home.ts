import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController, private nativePageTransition: NativePageTransitions) {
  }

  slidePage() {
    let options : NativeTransitionOptions = {
      direction:'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    };
    this.nativePageTransition.slide(options);
    this.navCtrl.setRoot("SecondPage");
  }

  flipPage() {
    let options : NativeTransitionOptions = {
      direction:'up',
      duration: 600
    };
    this.nativePageTransition.flip(options);
    this.navCtrl.push("SecondPage");
  }

  fadePage() {
    this.nativePageTransition.fade(null);
    this.navCtrl.setRoot("SecondPage");
  }

  curlPage() {
    let options : NativeTransitionOptions = {
      direction:'up',
      duration: 600
    };
    this.nativePageTransition.curl(options);
    this.navCtrl.setRoot("SecondPage");
  }
}
