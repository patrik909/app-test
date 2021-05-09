import TableItem from 'src/models/table/TableItem';

export default interface TableState {
  list: Array<TableItem>,
  sortedBy: string;
}