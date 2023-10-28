import { Text } from "@mantine/core";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";

export function HeaderTable() {
  return (
    <div className={styles.container}>
      <Text className={`${typo.size_14_600} ${styles.text}`}>Mã đơn hàng</Text>
      <Text className={`${typo.size_14_600} ${styles.text}`}>Tên khách hàng</Text>
      <Text className={`${typo.size_14_600} ${styles.text}`}>Ngày đặt</Text>
      <div />
      <div />
    </div>
  );
}
