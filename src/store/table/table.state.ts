import TableModel from "src/models/api/TableModel";

export default interface TableState {
  list: Array<TableModel>,
  sortedBy: string;
}