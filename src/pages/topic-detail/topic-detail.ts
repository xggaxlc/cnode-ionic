import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-topic-detail',
  templateUrl: 'topic-detail.html'
})
export class TopicDetailPage {
  id: string = this.navParams.get('id');
  path: string = `/topic/${this.id}`;
  request: Observable<any> = this.api.get(this.path, this.path);
  data: any = {};

  constructor(
    public navCtrl: NavController,
    public api: Api,
    public navParams: NavParams
  ) {}

  onSuccess(res) {
    this.data = res.data;
  }

  onError(err) {
    console.log(err)
  }

}
