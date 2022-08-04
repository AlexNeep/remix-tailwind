export interface Employee {
  id?: number;
  name: string;
  days: Days;
}

export interface Days {
  monday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  thursday?: boolean;
  friday?: boolean;
}
