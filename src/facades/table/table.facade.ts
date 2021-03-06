import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reverseList, setList, sortListByKey } from 'src/store/table/table.actions';
import { getList, getListTitles, getSortedBy } from 'src/store/table/table.selectors';
import ApiService from 'src/services/api/api.service';
import TableItem from 'src/models/table/TableItem';
import TableState from 'src/store/table/table.state';

@Injectable()
export default class TableFacade {

  public listLoading: boolean;
  public list$: Observable<TableItem[]> = this.store.pipe(select(getList))
  public listTitles$: Observable<string[]> = this.store.pipe(select(getListTitles))
  public listSortedBy$: Observable<string> = this.store.pipe(select(getSortedBy))

  constructor(
    private apiService: ApiService,
    private store: Store<TableState>
  ) { }

  public fetchList(): void {
    this.listLoading = true;
    const subscription$ = this.apiService.fetch()
      .subscribe((tableItems: Array<TableItem>) => {
        this.store.dispatch(setList({ list: tableItems }));
        this.sortListByKey('balance');
        this.listLoading = false;
        subscription$.unsubscribe();
      })
  }

  public reverseList(): void {
    this.store.dispatch(reverseList());
  }

  public sortListByKey(key: string): void {
    this.store.dispatch(sortListByKey({ key }));
  }
}
