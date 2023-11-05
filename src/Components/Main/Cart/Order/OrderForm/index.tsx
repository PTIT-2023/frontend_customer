import { OrderForm } from "@/pages/main/cart/order";
import styles from "./index.module.css";
import { Layout } from "../Layout";
import { Button, Text, TextInput, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import typo from "@/styles/text.module.css";

type OrderFormProps = {
  values: OrderForm;
  onChangeValues: (field: string, value: string | number) => void;
  onButtonClick: () => void;
  errors: Record<string, string>;
};

export function OrderForm({ values, onChangeValues, onButtonClick, errors }: OrderFormProps) {
  return (
    <div className={styles.container}>
      <Layout title="Tên người nhận">
        <TextInput
          value={values.deliveryName}
          onChange={(event) => onChangeValues("deliveryName", event.currentTarget.value)}
          error={errors.deliveryName}
        />
      </Layout>
      <Layout title="Địa chỉ người nhận">
        <Textarea
          value={values.deliveryAddress}
          onChange={(event) => onChangeValues("deliveryAddress", event.currentTarget.value)}
          minRows={3}
          maxRows={3}
          autosize
          error={errors.deliveryAddress}
        />
      </Layout>
      <Layout title="Số điện thoại người nhận">
        <TextInput
          value={values.deliveryPhone}
          onChange={(event) => onChangeValues("deliveryPhone", event.currentTarget.value)}
          error={errors.deliveryPhone}
        />
      </Layout>
      <Layout title="Email người nhận" required={false}>
        <TextInput
          value={values.deliveryEmail}
          onChange={(event) => onChangeValues("deliveryEmail", event.currentTarget.value)}
        />
      </Layout>
      <Layout title="Ngày đặt hàng" required={false}>
        <DateInput
          value={new Date(values.orderDate)}
          onChange={(value) => onChangeValues("orderDate", value?.getTime() ?? 0)}
          disabled={true}
          valueFormat="DD/MM/YYYY"
        />
      </Layout>
      <Layout title="Ngày giao dự kiến" required={false}>
        <DateInput
          value={new Date(values.deliveryDate)}
          onChange={(value) => onChangeValues("deliveryDate", value?.getTime() ?? 0)}
          disabled={true}
          valueFormat="DD/MM/YYYY"
        />
      </Layout>

      <Button
        onClick={onButtonClick}
        radius="xl"
        className={styles.button}
      >
        <Text className={`${typo.size_14_600} ${styles.text}`}>Xác nhận đặt hàng</Text>
      </Button>
    </div>
  );
}
