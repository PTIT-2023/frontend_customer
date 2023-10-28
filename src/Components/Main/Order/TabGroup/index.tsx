import { Button, Text } from "@mantine/core";
import typo from "@/styles/text.module.css";
import styles from "./index.module.css";
import { TabTypeProps } from "@/pages/main/order";
import { tabOrder } from "@/config/tabOrder";

type TabGroupProps = {
  tabType: TabTypeProps;
  onTabClick: (tabKey: string) => void;
};

export function TabGroup({ tabType, onTabClick }: TabGroupProps) {
  return (
    <div className={styles.container}>
      {tabOrder.map((e, i) => {
        const tabKey = e.id as keyof TabTypeProps;
        const isChose = tabType[tabKey] === "GREEN";

        return (
          <Button
            key={i}
            onClick={() => onTabClick(tabKey)}
            radius="xl"
            className={isChose ? styles.greenButton : styles.grayButton}
          >
            <Text className={`${typo.size_14_600} ${isChose ? styles.isChoseText : ""}`}>{e.value}</Text>
          </Button>
        );
      })}
    </div>
  );
}
