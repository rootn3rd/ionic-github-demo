import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchPage {
  username: string;
  constructor(private navCtrl: NavController) {}

  ionViewWillLoad() {}
  getUserProfileInfo() {
    this.navCtrl.push('ProfileSearchResultPage', {
      username: this.username
    });
  }
}
