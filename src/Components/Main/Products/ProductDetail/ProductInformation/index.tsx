import { Text } from "@mantine/core";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";
import { ProductInformationLayout } from "./ProductInformationLayout";
import { ProductProps } from "@/types";
import { formatInventoryQuantity, formatPrice, formatSoldQuantity } from "@/utils/string";

type ProductInformationProps = {
  product?: ProductProps;
};

export function ProductInformation({ product }: ProductInformationProps) {
  const list = [
    {
      title: "Mô tả sản phẩm",
      content: product?.description,
    },
    {
      title: "Nhiệt độ thích hợp",
      content: product?.temperature,
    },
    {
      title: "Môi trường sống",
      content: product?.habitat,
    },
    {
      title: "Loại thức ăn",
      content: product?.foodType,
    },
    {
      title: "Vị trí trong bể",
      content: product?.position,
    },
    {
      title: "Kích thước tối đa",
      content: product?.maxSize,
    },
    {
      title: "Độ PH",
      content: product?.ph,
    },
    {
      title: "Hình thức sinh sản",
      content: product?.reproductionMethod,
    },
  ];


  return (
    <div className={styles.container}>
      <Text className={`${typo.size_24_600} ${styles.name}`}>{product?.name}</Text>
      <Text className={`${typo.size_18_600} ${styles.price}`}>{formatPrice(product?.price)}</Text>
      <Text className={`${typo.size_16_300} ${styles.count}`}>{formatSoldQuantity(product?.soldQuantity)}</Text>
      <Text className={`${typo.size_16_300} ${styles.count2}`}>{formatInventoryQuantity(product?.inventoryQuantity)}</Text>

      {list.map((e, i) => (e.content && <ProductInformationLayout key={i} title={e.title} content={e.content} />))}
    </div>
  );
}
