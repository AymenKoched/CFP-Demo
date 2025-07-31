export interface Item {
  id: string;
  title: string;
  description: string;
  status: Status;
}

export enum Status {
  Pending = 'pending',
  Done = 'done',
}

export const items: Item[] = [];
