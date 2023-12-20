import { Component } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { DeferrableViewLazyLoadComponent } from './deferrable-view-lazy-load/deferrable-view-lazy-load.component';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [SectionContainerComponent, DeferrableViewLazyLoadComponent, HighlightModule],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export default class DeferrableViewsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEFERRABLE_VIEWS);
  escapeHtml = escapeHtml;

  deferExample = `
  @defer (on viewport; on timer(5s)){
    <app-deferrable-view-lazy-load />
  } @loading (after 100ms; minimum 1s) {
    <p>Loading...</p>
  } @error {
    <p>Failed to load the component</p>
  } @placeholder (minimum 500ms) {
    <p>Placeholder content</p>
  }
  `;
}
