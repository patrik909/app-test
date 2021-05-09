import ApiResponse from 'src/interfaces/ApiResponse';

export default class TableItem {
  
  constructor(
    public id: string,
    public accountId: string,
    public bank: string,
    public balance: number,
    public currency: string,
  ) { }

  static create(data: ApiResponse): TableItem {
    return new this(
      data.id,
      data.accountId,
      data.bank,
      data.balance,
      data.currency,
    );
  }
}
