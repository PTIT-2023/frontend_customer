import { Text } from "@mantine/core";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";

export function HeaderTable() {
  return (
    <div className={styles.container}>
      <Text className={`${typo.size_14_600} ${styles.text}`}>Hình ảnh</Text>
      <Text className={`${typo.size_14_600} ${styles.text}`}>Tên sản phẩm</Text>
      <Text className={`${typo.size_14_600} ${styles.text}`}>Số lượng</Text>
      <Text className={`${typo.size_14_600} ${styles.text}`}>Đơn giá</Text>
      <Text className={`${typo.size_14_600} ${styles.text}`}>Thành tiền</Text>
      <div />
    </div>
  );
}
