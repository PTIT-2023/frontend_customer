import { CarouselBanner } from "@/Components/Main/Dashboard/CarouselBanner";
import { NewlyImportedProducts } from "@/Components/Main/Dashboard/NewlyImportedProducts";
import { SellingProducts } from "@/Components/Main/Dashboard/SellingProducts";

export default function DashBoard() {
  return (
    <>
      <CarouselBanner />

      <SellingProducts />

      <NewlyImportedProducts />
    </>
  );
}

DashBoard.layout = "Menu";
