export interface Item {
  id: string;
  title: string;
  description: string;
  status: Status;
}

enum Status {
  Pending = 'pending',
  Done = 'done',
}

export const items: Item[] = [];
