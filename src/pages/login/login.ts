import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: string;
  password: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Let's populate this page with some filler content for funzies
    this.icons = [];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

    login() {
      this.navCtrl.push(HomePage);
      // this.nav.setRoot(page.component);
    };
  // }
  //
  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(ListPage, {
  //     item: item
  //   });
}
