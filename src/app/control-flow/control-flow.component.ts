import { Component } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { ControlFlow } from './service/control-flow.domain';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [SectionContainerComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export default class ControlFlowComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.FLOW_CONTROL);
  escapeHtml = escapeHtml;

  items: ControlFlow[] = [
    Object.assign(new ControlFlow(), {
      id: 0,
      name: 'abc'
    }), Object.assign(new ControlFlow(), {
      id: 1,
      name: 'def'
    }), Object.assign(new ControlFlow(), {
      id: 2,
      name: 'ghi'
    })
  ];

  ngForCode = `
  <ul>
    <li *ngFor="let item of items; trackBy: identify">
      {{ item.name }}
    </li>
  </ul>

  identify(index: number, item: ControlFlow) {
    return item.id;
  }
  `;

  controlFlowForCode = `
  <ul>
    @for (item of items; track item.id) {
      <li>
        {{ item.name }}
      </li>
    } @empty {
      <div>Empty</div>
    }
  </ul>
  `;

  ngIfCode = `
  <table *ngIf="hasData else nodata">
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
    <tr *ngFor="let data of items">
      <td>
        {{data.id}}
      </td>
      <td>
        {{data.name}}
      </td>
    </tr>
  </table>
  <ng-template #nodata>
   <div>data not found</div>
  </ng-template>
  `;

  controlFlowIfCode = `
  @if (hasData) {
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      @for (data of items; track data.id) {
        <tr>
          <td>
            {{data.id}}
          </td>
          <td>
            {{data.name}}
          </td>
        </tr>
      }
    </table>
  } @else {
    <div>data not found</div>
  }
  `;

  identify(index: number, item: ControlFlow) {
    return item.id;
  }

  get hasData() {
    return this.items.length > 0;
  }
}
