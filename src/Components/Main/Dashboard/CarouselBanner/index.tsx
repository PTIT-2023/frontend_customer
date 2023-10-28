import { Carousel } from "@mantine/carousel";
import styles from "./index.module.css";
import { CarouselBannerItem } from "./CarouselBannerItem";

export function CarouselBanner() {
  return (
    <Carousel
      slideSize="sx"
      slideGap="xs"
      loop
      align="start"
      controlSize={20}
      className={styles.carousel}
    >
      <CarouselBannerItem />
      <CarouselBannerItem />
      <CarouselBannerItem />
      <CarouselBannerItem />
      <CarouselBannerItem />
      <CarouselBannerItem />
      <CarouselBannerItem />
      <CarouselBannerItem />
      <CarouselBannerItem />
      <CarouselBannerItem />
    </Carousel>
  );
}
