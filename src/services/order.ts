import { FnType, wrapper } from "@/utils/misc";
import axios, { AxiosRequestConfig } from "@/services/axios";
import { Response, StatusCode } from "@/types";

function _wrapper<T>(fn: FnType<boolean, T, unknown, unknown>) {
  return wrapper(fn, { __default: false });
}

export const cancelOrder = _wrapper(async (id?: string) => {
  const res = await axios.put<AxiosRequestConfig, Response<null>>("/customer/order/" + id);
  return res.code === StatusCode.Success;
});
