import { FnType, wrapper } from "@/utils/misc";
import axios, { AxiosRequestConfig } from "@/services/axios";
import { CartProps, Response, StatusCode } from "@/types";
import { USER_ID } from "@/config/constants";

function _wrapper<T>(fn: FnType<CartProps[] | boolean, T, unknown, unknown>) {
  return wrapper(fn, { __default: [] });
}

export const getCarts = _wrapper(async () => {
  const res = await axios.get<AxiosRequestConfig, Response<CartProps[]>>(`/customer/cart?customerId=${USER_ID}`);
  return res.code === StatusCode.Success ? res.data : [];
});

export const deleteCart = _wrapper(async (id?: string) => {
  const res = await axios.delete<AxiosRequestConfig, Response<null>>(`/customer/cart/${id}`);
  return res.code === StatusCode.Success;
});

type ChangeQuantityProps = {
  id?: string;
  quantity?: string;
};

export const changeQuantity = _wrapper(async (input?: ChangeQuantityProps) => {
  const res = await axios.put<AxiosRequestConfig, Response<null>>(`/customer/cart`, {
    cartDetailId: input?.id,
    quantity: input?.quantity,
  });
  return res.code === StatusCode.Success;
});

type AddProductToCartProps = {
  quantity?: number;
  unitPrice?: number;
  productId?: string;
};

export const addProductToCart = _wrapper(async (input?: AddProductToCartProps) => {
  const res = await axios.post<AxiosRequestConfig, Response<null>>(`/customer/cart`, {
    quantity: input?.quantity,
    unitPrice: input?.unitPrice,
    productId: input?.productId,
    customerId: USER_ID,
  });
  return res.code === StatusCode.Success;
});
