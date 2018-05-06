import { Component } from '@angular/core';
import { Api } from './../../providers/api';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { TopicDetailPage } from '../topic-detail/topic-detail';

interface TopicParams {
  page: number;
  tab?: string;
  limit?: number;
  mdrender?: boolean;
}

@Component({
  selector: 'page-topic-list',
  templateUrl: 'topic-list.html'
})
export class TopicListPage {
  path: string = '/topics';
  title: string = this.navParams.get('title');
  data: any[] = [];
  topicParams: TopicParams = {
    limit: 20,
    page: 1,
    tab: this.navParams.get('tab')
  }
  request: Observable<any> = this.getRequest();

  constructor(
    public navCtrl: NavController,
    public api: Api,
    public navParams: NavParams
  ) {}

  getRequest() {
    return this.api.get(this.path, this.topicParams);
  }

  navToDetailPage(id) {
    this.navCtrl.push(TopicDetailPage, { id });
  }

  doInfinite(infiniteScroll) {
    this.topicParams.page ++;
    this.getRequest()
      .subscribe(
        (res: any) => {
          this.onSuccess(res);
          infiniteScroll.complete();
        },
        err => this.onError(err)
      )
  }

  onSuccess(res) {
    this.data = this.topicParams.page === 1 ? res.data : this.data.concat(res.data);
  }

  onError(err) {
    console.log(err)
  }
}
