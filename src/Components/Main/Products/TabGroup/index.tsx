import { tabProduct } from "@/config/tabProduct";
import { TabTypeProps } from "@/pages/main/products";
import { Button, Select, Text } from "@mantine/core";
import typo from "@/styles/text.module.css";
import styles from "./index.module.css";

type TabGroupProps = {
  tabType: TabTypeProps;
  onTabClick: (tabKey: string) => void;
};

export function TabGroup({ tabType, onTabClick }: TabGroupProps) {
  return (
    <div className={styles.container}>
      {tabProduct.map((e, i) => {
        const tabKey = e.id as keyof TabTypeProps;
        const isChose = tabType[tabKey] === "GREEN";

        return (
          <Button
            key={i}
            onClick={() => onTabClick(tabKey)}
            radius="0"
            className={isChose ? styles.greenButton : styles.grayButton}
          >
            <Text className={`${typo.size_14_600} ${isChose ? styles.isChoseText : ""}`}>{e.value}</Text>
          </Button>
        );
      })}

      <Select
        placeholder="Giá tăng dần"
        data={["Giá tăng dần", "Giá giảm dần"]}
        allowDeselect
      />
    </div>
  );
}
