import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reverseList, setList, sortListByKey } from 'src/store/table/table.actions';
import { getList, getListTitles, getSortedBy } from 'src/store/table/table.selectors';
import ApiService from 'src/services/api/api.service';
import ApiResponse from 'src/interfaces/ApiResponse';
import TableItem from 'src/models/table/TableItem';
import TableState from 'src/store/table/table.state';

@Injectable()
export default class TableFacade {

  listLoading: boolean;
  list$: Observable<any> = this.store.pipe(select(getList))
  listTitles$: Observable<any> = this.store.pipe(select(getListTitles))
  listSortedBy$: Observable<any> = this.store.pipe(select(getSortedBy))

  constructor(
    private apiService: ApiService,
    private store: Store<TableState>
  ) { }

  public fetchList(): void {
    this.listLoading = true;
    const subscription$ = this.apiService.fetch()
      .subscribe((response: Array<ApiResponse>) => {
        this.store.dispatch(setList({ 
          list: response.map((item) => TableItem.create(item)) 
        }));
        this.store.dispatch(sortListByKey({ 
          key: 'balance' 
        }));
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