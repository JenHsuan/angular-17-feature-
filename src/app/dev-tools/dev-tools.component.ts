import { Component } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-dev-tools',
  standalone: true,
  imports: [SectionContainerComponent],
  templateUrl: './dev-tools.component.html',
  styleUrl: './dev-tools.component.scss'
})
export default class DevToolsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEV_TOOL);
  escapeHtml = escapeHtml;

}
