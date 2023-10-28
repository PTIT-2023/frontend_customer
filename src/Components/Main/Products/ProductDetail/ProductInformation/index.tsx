import { Text } from "@mantine/core";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";
import { ProductInformationLayout } from "./ProductInformationLayout";

export function ProductInformation() {
  const list = [
    {
      title: "Mô tả sản phẩm",
      content: `Cá Phượng Hoàng, tên khoa học Mikrogeophagus ramirezi,
      là một loài cá đặc hữu tự nhiên của lưu vực sông Orinoco,
      ở các savan của Venezuela và Colombia tại Nam Mỹ.
      Ngày nay cá phượng hoàng được nhân giống và nuôi dưỡng
      làm cá cảnh ở nhiều quốc gia trên khặp các châu lục.
      Ở nước ta cá phượng Hoàng rất được ưa chuộng và thường
      được nuôi làm cảnh hoặc thả trong các bể thủy sinh.`,
    },
    {
      title: "Môi trường sống",
      content: "Dưới nước",
    },
    {
      title: "Nhiệt độ thích hợp",
      content: "18-30 độ C",
    },
    {
      title: "Độ PH",
      content: "2,5",
    },
  ];


  return (
    <div className={styles.container}>
      <Text className={`${typo.size_24_600} ${styles.name}`}>Cá phượng hoàng</Text>
      <Text className={`${typo.size_18_600} ${styles.price}`}>50.000 VND</Text>
      <Text className={`${typo.size_16_300} ${styles.count}`}>Số lượng đã bán: 2.2k</Text>
      <Text className={`${typo.size_16_300} ${styles.count2}`}>Số lượng trong kho: 158</Text>

      {list.map((e, i) => <ProductInformationLayout key={i} title={e.title} content={e.content} />)}
    </div>
  );
}
