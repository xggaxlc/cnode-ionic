import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as CanvasLoading from 'canvas-loading';

@Component({
  selector: 'loading',
  templateUrl: 'loading.html'
})
export class Loading implements OnInit {
  @Input() name: string = 'Spinner';
  @Input() size: number = 50;
  @Input() color: string = '#FF0066';

  @ViewChild('loading')
  loadingRef: ElementRef;

  ngOnInit() {
    const loadingInstance = new CanvasLoading[this.name]({
      size: this.size,
      color: this.color
    });

    const loadingWrapperElement: HTMLElement = this.loadingRef.nativeElement;
    loadingWrapperElement.appendChild(loadingInstance.canvas);
  }

}
