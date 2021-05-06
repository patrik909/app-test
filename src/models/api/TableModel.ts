export default class TableModel {
  
  constructor(
    public id: string,
    public accountId: string,
    public bank: string,
    public balance: number,
    public currency: string,
  ) { }

  static create(data: any): TableModel {
    return new this(
      data.id,
      data.accountId,
      data.bank,
      data.balance,
      data.currency,
    );
  }
}
