import { ChangeDetectionStrategy, Component } from '@angular/core';
import TableFacade from 'src/facades/table/table.facade';
import ApiService from 'src/services/api/api.service';

@Component({
  selector: 'table-page',
  templateUrl: './table.component.html',
  styleUrls: ['./table.scss'],
  providers: [TableFacade, ApiService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent { 

  constructor(
    public tableFacade: TableFacade,
  ) { }
}
