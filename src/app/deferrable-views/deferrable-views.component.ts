import { Component } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [SectionContainerComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export default class DeferrableViewsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEFERRABLE_VIEWS);
  escapeHtml = escapeHtml;
}
