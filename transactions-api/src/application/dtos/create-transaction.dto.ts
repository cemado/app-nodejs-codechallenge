export class CreateTransactionDto{
    constructor(
        public readonly accountExternalIdDebit: string,
        public readonly accountExternalIdCredit: string,
        public readonly transferTypeId: number,
        public readonly value: number,
      ) {}
}