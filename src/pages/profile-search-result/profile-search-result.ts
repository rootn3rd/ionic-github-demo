import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service/github-service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { Repository } from '../../models/repository';

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html'
})
export class ProfileSearchResultPage {
  username: string;
  user$: Observable<User>;
  repo$: Observable<Repository[]>;

  constructor(
    private gitHub: GithubService,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {}

  getUserInformation(): void {
    this.user$ = this.gitHub.getUserInformation(this.username);
    this.repo$ = this.gitHub.getRepositoryInformation(this.username);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }
}
