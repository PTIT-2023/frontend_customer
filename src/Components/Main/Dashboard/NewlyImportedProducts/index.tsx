import { Carousel } from "@mantine/carousel";
import { ProductCard } from "../../Products/ProductCard";
import styles from "./index.module.css";
import { Text } from "@mantine/core";
import typo from "@/styles/text.module.css";

export function NewlyImportedProducts() {
  return (
    <>
      <Text className={`${typo.size_20_600} ${styles.title}`}>Sản phẩm bán chạy</Text>

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
