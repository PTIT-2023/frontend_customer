import { ImageAndCountForm } from "@/Components/Main/Products/ProductDetail/ImageAndCountForm";
import styles from "./index.module.css";
import { ProductInformation } from "@/Components/Main/Products/ProductDetail/ProductInformation";

export default function ProductDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.containerCenter}>
        <ImageAndCountForm />
        <ProductInformation />
      </div>
    </div>
  );
}

ProductDetail.layout = "Menu";
