import { NumberInput, Text } from "@mantine/core";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";
import { ProductImage } from "@/Components/Common/Icons/ProductImage";
import { IconClose } from "@/Components/Common/Icons/IconClose";

export function CartItem() {
  return (
    <div className={styles.container}>
      <ProductImage width={106} height={66} className={styles.image} />
      <Text className={`${typo.size_14_600} ${styles.text}`}>Cá phượng hoàng</Text>
      <NumberInput
        value={2}
        onChange={() => null}
        className={styles.numberInput}
      />
      <Text className={`${typo.size_14_600} ${styles.text}`}>40.000 VND</Text>
      <Text className={`${typo.size_14_600} ${styles.text}`}>80.000 VND</Text>
      <div className={styles.closeIcon} onClick={() => null}>
        <IconClose />
      </div>
    </div>
  );
}
