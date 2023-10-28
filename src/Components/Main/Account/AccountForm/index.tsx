import { Group, Radio, Text, TextInput, Textarea } from "@mantine/core";
import { AccountFormLayout } from "./AccountFormLayout";
import { DateInput } from '@mantine/dates';
import typo from "@/styles/text.module.css";

export function AccountForm() {
  return (
    <div>
      <AccountFormLayout title="Họ">
        <TextInput
          value={""}
          onChange={() => null}
        />
      </AccountFormLayout>
      <AccountFormLayout title="Tên">
        <TextInput
          value={""}
          onChange={() => null}
        />
      </AccountFormLayout>
      <AccountFormLayout title="Giới tính">
        <Radio.Group>
          <Group>
            <Radio value="1" label="Nam" />
            <Radio value="2" label="Nữ" />
          </Group>
        </Radio.Group>
      </AccountFormLayout>
      <AccountFormLayout title="Ngày sinh">
        <DateInput
          value={new Date()}
          onChange={() => null}
        />
      </AccountFormLayout>
      <AccountFormLayout title="Email">
        <Text className={typo.size_14_300}>quocnhat71@gmail.com</Text>
      </AccountFormLayout>
      <AccountFormLayout title="Số điện thoại">
        <TextInput
          value={""}
          onChange={() => null}
        />
      </AccountFormLayout>
      <AccountFormLayout title="Địa chỉ">
        <Textarea
          value={""}
          onChange={() => null}
          autosize
          minRows={4}
          maxRows={4}
        />
      </AccountFormLayout>
    </div>
  );
}
