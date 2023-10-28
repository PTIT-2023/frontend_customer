import { Button, Text } from "@mantine/core";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";

export function CartFooter() {
  return (
    <div className={styles.container}>
      <Text className={`${typo.size_14_300} ${styles.total}`}>Tổng tiền: </Text>
      <Text className={`${typo.size_24_600} ${styles.money}`}>160.000 VND</Text>

      <Button
        className={styles.button}
        radius={0}
      >
        <Text className={`${typo.size_14_600} ${styles.textButton}`}>Đặt hàng</Text>
      </Button>
    </div>
  );
}
