import TableItem from 'src/models/api/TableItem';

export default interface TableState {
  list: Array<TableItem>,
  sortedBy: string;
}