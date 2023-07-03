export type role = 'admin' | 'customer' | 'mod';
export enum Role {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
}

export interface PayloadToken {
  role: string;
  sub: number;
}
