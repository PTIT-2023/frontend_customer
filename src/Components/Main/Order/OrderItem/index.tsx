import { Button, Text } from "@mantine/core";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";

export function OrderItem() {
  return (
    <div className={styles.container}>
      <Text className={`${typo.size_14_600} ${styles.text}`}>XXXXXXXXXXXXXXXX </Text>
      <Text className={`${typo.size_14_600} ${styles.text}`}>Nguyễn Quốc Nhật</Text>
      <Text className={`${typo.size_14_600} ${styles.text}`}>5/10/2023</Text>
      <Button
        onClick={() => null}
        radius="xl"
        className={styles.detailButton}
      >
        <Text className={`${typo.size_14_600} ${styles.textButton}`}>Xem chi tiết</Text>
      </Button>

      <Button
        onClick={() => null}
        radius="xl"
        className={styles.cancelButton}
      >
        <Text className={`${typo.size_14_600} ${styles.textButton}`}>Huỷ đơn</Text>
      </Button>
      <div />
    </div>
  );
}
