import { Component } from '@angular/core';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-esbuild',
  standalone: true,
  imports: [SectionContainerComponent],
  templateUrl: './esbuild.component.html',
  styleUrl: './esbuild.component.scss'
})
export default class EsbuildComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.ESBUILD);
  escapeHtml = escapeHtml;

}
