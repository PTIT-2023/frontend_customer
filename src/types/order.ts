export type ListOrderProps = {
  totalResult?: number;
  data?: OrderProps[];
};

export type OrderProps = {
  id?: string;
  customerName?: string;
  orderDate?: string;
};
