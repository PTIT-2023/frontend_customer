import { CarouselBanner } from "@/Components/Main/Dashboard/CarouselBanner";
import { NewlyImportedProducts } from "@/Components/Main/Dashboard/NewlyImportedProducts";
import { SellingProducts } from "@/Components/Main/Dashboard/SellingProducts";
import styles from "./index.module.css";

export default function DashBoard() {
  return (
    <div>
      <CarouselBanner />
      <div className={styles.container}>
        <SellingProducts />

        <NewlyImportedProducts />
      </div>
    </div>
  );
}

DashBoard.layout = "Menu";
