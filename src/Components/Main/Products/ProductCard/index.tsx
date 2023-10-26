import { ProductImage } from "@/Components/Common/Icons/ProductImage";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";
import { Text } from "@mantine/core";
import { useRouter } from "next/router";

export function ProductCard() {
  const router = useRouter();
  const onClick = () => {
    router.push("/main/products/detail?id");
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <ProductImage width={182} height={86} />

      <Text className={`${typo.size_16_600} ${styles.name}`}>Cá phượng hoàng</Text>

      <div className={styles.expand}>
        <Text className={`${typo.size_14_600} ${styles.price}`}>50.000 VND</Text>
        <Text className={`${typo.size_14_300} ${styles.sell}`}>Đã bán 2k</Text>
      </div>
    </div>
  );
}
