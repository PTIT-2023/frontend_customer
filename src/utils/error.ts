import { OrderForm } from "@/pages/main/cart/order";
import { z } from "zod";

export function checkErrorOrder(input: OrderForm):
  | boolean
  | {
      deliveryAddress: string;
      deliveryName: string;
      deliveryPhone: string;
    } {
  const schema = z
    .object({
      deliveryAddress: z.string().nonempty({ message: "Địa chỉ không được để trống" }),
      deliveryName: z.string().nonempty({ message: "Tên không được để trống" }),
      deliveryPhone: z
        .string()
        .nonempty({ message: "Số điện thoại không được để trống" })
        .refine((value) => /^\+?[0-9]\d{9,11}$/.test(value), { message: "Số điện thoại không đúng định dạng" }),
    })
    .partial();
  const res = schema.safeParse({
    deliveryAddress: input.deliveryAddress,
    deliveryName: input.deliveryName,
    deliveryPhone: input.deliveryPhone.toString(),
  });
  if (res.success) {
    return false;
  }
  const fieldErrors = res.error.formErrors.fieldErrors;
  const updatedError = {
    deliveryAddress: fieldErrors.deliveryAddress ? fieldErrors.deliveryAddress[0] : "",
    deliveryName: fieldErrors.deliveryName ? fieldErrors.deliveryName[0] : "",
    deliveryPhone: fieldErrors.deliveryPhone ? fieldErrors.deliveryPhone[0] : "",
  };
  return updatedError;
}
