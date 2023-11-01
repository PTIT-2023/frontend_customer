import { IconSearchGray } from "@/Components/Common/Icons/IconSearchGray";
import { TextInput } from "@mantine/core";
import { useState } from "react";
import styles from "./index.module.css";

export function Search() {
  const [value, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <TextInput
      value={value}
      placeholder="Search..."
      onChange={onChange}
      radius={4}
      rightSection={<IconSearchGray />}
      className={styles.textInput}
    />
  );
}
