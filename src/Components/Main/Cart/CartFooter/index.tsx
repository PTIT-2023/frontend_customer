import { Button, Text } from "@mantine/core";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";
import { formatPrice } from "@/utils/string";

type CartFooterProps = {
  total?: number;
};

export function CartFooter({ total }: CartFooterProps) {
  return (
    <div className={styles.container}>
      <Text className={`${typo.size_14_300} ${styles.total}`}>Total: </Text>
      <Text className={`${typo.size_24_600} ${styles.money}`}>{formatPrice(total)}</Text>

      <Button
        className={styles.button}
        radius={0}
      >
        <Text className={`${typo.size_14_600} ${styles.textButton}`}>Buy Now</Text>
      </Button>
    </div>
  );
}
