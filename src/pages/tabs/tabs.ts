import { TopicListPage } from './../topic-list/topic-list';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1 = {
    page: TopicListPage,
    params: { tab: '', title: '全部' },
    icon: 'home'
  }

  tab2 = {
    page: TopicListPage,
    params: { tab: 'good', title: '精华' },
    icon: 'star'
  }

  tab3 = {
    page: TopicListPage,
    params: { tab: 'share', title: '分享' },
    icon: 'share'
  }

  tab4 = {
    page: TopicListPage,
    params: { tab: 'ask', title: '问答' },
    icon: 'help-circle'
  }

  tab5 = {
    page: TopicListPage,
    params: { tab: 'job', title: '招聘' },
    icon: 'contacts'
  }

  tab6 = {
    page: TopicListPage,
    params: { tab: 'dev', title: '开发' },
    icon: 'bug'
  }
}
