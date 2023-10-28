import { Carousel } from "@mantine/carousel";
import styles from "./index.module.css";
import { ProductImage } from "@/Components/Common/Icons/ProductImage";
import { Button, NumberInput, Text } from "@mantine/core";
import typo from "@/styles/text.module.css";

export function ImageAndCountForm() {
  return (
    <div className={styles.container}>
      <Carousel
        slideSize="sx"
        slideGap="xs"
        loop
        align="start"
        controlSize={20}
        className={styles.carousel}
      >
        <ProductImage width={263} height={170} />
        <ProductImage width={263} height={170} />
        <ProductImage width={263} height={170} />
      </Carousel>

      <div className={styles.count}>
        <Text className={typo.size_14_600}>Số lượng</Text>
        <NumberInput
          value={"1"}
          onChange={() => null}
          className={styles.numberInput}
        />
      </div>

      <Button
        radius={0}
        className={styles.button}
      >
        <Text className={`${typo.size_14_600} ${styles.textButton}`}>Đặt hàng</Text>
      </Button>
    </div>
  );
}
