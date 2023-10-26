import { Carousel } from "@mantine/carousel";
import Image from "next/image";

export function CarouselBannerItem() {
  return (
    <Carousel.Slide>
      <Image
        src="https://chaucayxuatkhau.com/wp-content/uploads/2021/11/cac-loai-cay-thuy-sinh-mau-do.jpg"
        alt="banner"
        width={1400}
        height={150}
        priority
      />
    </Carousel.Slide>
  );
}
