import { Component } from '@angular/core';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-learning-resource',
  standalone: true,
  imports: [SectionContainerComponent, HighlightModule],
  templateUrl: './learning-resource.component.html',
  styleUrl: './learning-resource.component.scss'
})
export default class LearningResourceComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.LEARNING_RESOURCE);
  escapeHtml = escapeHtml;

}
