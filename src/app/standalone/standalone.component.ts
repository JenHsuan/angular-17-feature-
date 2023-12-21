import { Component } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [SectionContainerComponent, HighlightModule],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.scss'
})
export default class StandaloneComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.STANDALONE);
  escapeHtml = escapeHtml;

  migateStandalone = `ng generate @angular/core:standalone`;

}
