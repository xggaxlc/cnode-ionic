import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'network-detect',
  templateUrl: 'network-detect.html'
})
export class NetworkDetect implements OnChanges {

  @Input() request: Observable<any>;
  @Output() onSuccess = new EventEmitter();
  @Output() onError = new EventEmitter();

  loading: boolean = true;
  succed: boolean = false;
  failed: boolean = false;

  handleSuccess(res) {
    this.loading = false;
    this.failed = false;
    this.succed = true;
    this.onSuccess.emit(res);
  }

  handleError(err) {
    this.loading = false;
    this.failed = true;
    this.succed = false;
    this.onError.emit(err);
  }

  doRequest() {
    this.loading = true;
    this.failed = false;
    this.succed = false;

    this.request
      .subscribe(
        res => this.handleSuccess(res),
        err => this.handleError(err)
      );
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (changes.request.currentValue) {
      this.doRequest();
    }
  }
}
