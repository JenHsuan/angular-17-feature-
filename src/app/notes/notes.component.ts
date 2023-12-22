import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent, HighlightModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export default class NotesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.NOTES);
  escapeHtml = escapeHtml;

  simplifiedStyleDemo = `
  //Before 17
  @Component({
    ...,
    styleUrls: ['./notes.component.scss']
  })

  //After 17
  @Component({
    ...,
    styleUrl: './notes.component.scss'
  })
  `;

  requiredInputsDemo = `
  @Input({ required: true }) title: string = '';
  `;
}
