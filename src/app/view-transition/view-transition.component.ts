import { Component, ElementRef, Input, ViewChild, inject, numberAttribute } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { HighlightModule } from 'ngx-highlightjs';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [RouterLink, CommonModule, SectionContainerComponent, HighlightModule],
  templateUrl: './view-transition.component.html',
  styleUrl: './view-transition.component.scss'
})
export default class ViewTransitionComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.VIEW_TRANSITION);
  escapeHtml = escapeHtml;

  appCode = `
  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(
        ...
        withViewTransitions(),
        withComponentInputBinding()
      ),
      ...
    ]
  }
  `;

  cssCode = `
  .count {
    font-family: sans-serif;
    text-align: center;
    position: absolute;
    font-size: 5vw;
    view-transition-name: count;
  }
  
  @keyframes rotate-out {
    to {
      transform: rotate(90deg);
    }
  }
  
  @keyframes rotate-in {
    from {
      transform: rotate(-90deg);
    }
  }
  
  ::view-transition-old(count),
  ::view-transition-new(count) {
    animation-duration: 200ms;
    animation-name: -ua-view-transition-fade-in, rotate-in;
  }
  
  ::view-transition-old(count) {
    animation-name: -ua-view-transition-fade-out, rotate-out;
  }
  `;

  tsCode = `
  export default class ViewTransitionComponent {
    @Input({ transform: numberAttribute }) count = 0;
  
    constructor(
      private router: Router
    ) {
    }
  
    nav() {
      this.count = !this.count ? 0 : this.count;
      this.router.navigate(['/view-transition', Number(this.count) + 1]);
    }
  }
  `;

  htmlCode = `
  <div class="description-container">
    <button (click)="nav()">Increment</button>
    <div class="count">{{count}}</div>
  </div>
  `;
  
  //private readonly document = inject<Document & {startViewTransition: (callback: () => void) => {}}>(DOCUMENT);
  
  @Input({ transform: numberAttribute }) count = 0;

  constructor(
    private router: Router
  ) {
  }

  nav() {
    this.count = !this.count ? 0 : this.count;
    this.router.navigate(['/view-transition', Number(this.count) + 1]);
  }
  // @ViewChild('canvas') contentRef: ElementRef;

  // addImage() {
  //   const newImage = document.createElement("img");
  //   newImage.width = 200;
  //   newImage.src = "https://raw.githubusercontent.com/JenHsuan/angular-17-feature-/main/src/assets/image/angular-logo.png";
  //   (document as any).startViewTransition(() => {    
  //     this.contentRef.nativeElement.appendChild(newImage);
  //   }); 
  // }
}
