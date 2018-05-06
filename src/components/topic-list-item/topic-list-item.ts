import { Component, Input } from '@angular/core';
@Component({
  selector: 'topic-list-item',
  templateUrl: 'topic-list-item.html'
})
export class TopicListItem {
  @Input() data: any = {};
}
