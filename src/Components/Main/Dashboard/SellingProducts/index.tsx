import { Carousel } from "@mantine/carousel";
import { ProductCard } from "../../Products/ProductCard";
import styles from "./index.module.css";
import { Text } from "@mantine/core";
import typo from "@/styles/text.module.css";

export function SellingProducts() {
  return (
    <>
      <Text className={`${typo.size_20_600} ${styles.title}`}>Hàng mới nhập về</Text>

      <Carousel slideSize="sx" slideGap="xs" loop align="start" controlSize={20} className={styles.carousel}>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
        <Carousel.Slide><ProductCard /></Carousel.Slide>
      </Carousel>
    </>
  );
}
