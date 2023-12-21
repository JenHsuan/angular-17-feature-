import { AfterRenderPhase, AfterViewInit, Component, ElementRef, ViewChild, afterNextRender, afterRender } from '@angular/core';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { HighlightModule } from 'ngx-highlightjs';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-hydration',
  standalone: true,
  imports: [SectionContainerComponent, HighlightModule],
  templateUrl: './hydration.component.html',
  styleUrl: './hydration.component.scss'
})
export default class HydrationComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.HYDRATION);
  escapeHtml = escapeHtml;

  ngWatch = `npm run watch`;
  startInSsr = `npm run serve:ssr:Angular17Project`;
  enableSsrExample = `ng new my-app --ssr`;
  ssrCliCommand = `ng add @angular/ssr`;

  newHooksExample = `
  export default class HydrationComponent {
    data = 0;
    @ViewChild('content') contentRef: ElementRef;
  
    constructor() {
      timer(100, 1000)
        .pipe(
          take(5),
        ).subscribe(
          (value) => { 
            this.data = value;
          }
     );
  
      afterRender(() => {
        console.log('afterRender: $ {this.contentRef.nativeElement.innerHTML}');
      }, {phase: AfterRenderPhase.Read});
  
      afterNextRender(() => {
        console.log('afterNextRender: $ {this.contentRef.nativeElement.innerHTML}');
      }, {phase: AfterRenderPhase.Write});
    }
  
    ngAfterViewInit() {
      console.log(ngAfterViewInit: $ {this.contentRef.nativeElement.innerHTML}');
    }
  }
  `;

  data = 0;
  @ViewChild('content') contentRef: ElementRef;

  ngAfterViewInit() {
    console.log(`ngAfterViewInit: ${this.contentRef.nativeElement.innerHTML}`);
  }

  constructor() {
    timer(100, 1000)
      .pipe(
        take(5),
      ).subscribe(
        (value) => { 
          this.data = value;
        }
   );

    afterRender(() => {
      console.log(`afterRender: ${this.contentRef.nativeElement.innerHTML}`);
    }, {phase: AfterRenderPhase.Read});

    afterNextRender(() => {
      console.log(`afterNextRender: ${this.contentRef.nativeElement.innerHTML}`);
    }, {phase: AfterRenderPhase.Write});
  }
}
