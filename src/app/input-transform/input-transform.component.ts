import { Component, Input } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { HighlightModule } from 'ngx-highlightjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-transform',
  standalone: true,
  imports: [SectionContainerComponent, HighlightModule],
  templateUrl: './input-transform.component.html',
  styleUrl: './input-transform.component.scss'
})
export default class InputTransformComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.INUT_TRANSFORM);
  escapeHtml = escapeHtml;


  tsCode = `
  export default class InputTransformComponent {
    @Input({ transform: toNumber }) count = 0;
  
    constructor(
      private router: Router
    ) {
    }
  
    nav() {
      this.router.navigate(['/input-transform', this.count + 1]);
    }
    
  }
  
  function toNumber(value: string | number) {
    if (typeof value === 'number') {
      return value;
    }
    let val = parseInt(value);
    return Number.isNaN(val) ? 0 : val;
  }
  `;

  htmlCode = `
  <div class="description-container">
    <button (click)="nav()">Increment</button>
    <div class="data">{{count}}</div>
  </div>
  `;

  @Input({ transform: toNumber }) count = 0;

  constructor(
    private router: Router
  ) {
  }

  nav() {
    this.router.navigate(['/input-transform', this.count + 1]);
  }
  
}

function toNumber(value: string | number) {
  if (typeof value === 'number') {
    return value;
  }
  let val = parseInt(value);
  return Number.isNaN(val) ? 0 : val;
}