import { TabGroup } from "@/Components/Main/Order/TabGroup";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";
import { HeaderTable } from "@/Components/Main/Order/HeaderTable";
import { Scroll } from "@/Components/Common/Scroll";
import { OrderItem } from "@/Components/Main/Order/OrderItem";

export default function Order() {
  const router = useRouter();
  const { tab } = router.query;
  const [currentTab, setCurrentTab] = useState("");
  const form = useForm<TabTypeProps>({
    initialValues: {
      waitForConfirmation: "GREEN",
      waitingForDelivery: "GRAY",
      delivering: "GRAY",
      delivered: "GRAY",
      canceled: "GRAY",
    },
  });

  const handleTabClick = useCallback(
    (tabKey: string) => {
      const updatedButtonType: TabTypeProps = {
        waitForConfirmation: "GRAY",
        waitingForDelivery: "GRAY",
        delivering: "GRAY",
        delivered: "GRAY",
        canceled: "GRAY",
      };
      updatedButtonType[tabKey as keyof TabTypeProps] = "GREEN";
      form.setValues(updatedButtonType);
      setCurrentTab(tabKey);
      router.push("/main/order?tab=" + tabKey);
    },
    [form, router],
  );

  useEffect(() => {
    if (tab && !currentTab) {
      tab ? handleTabClick(tab as string) : handleTabClick("waitForConfirmation");
    }
  }, [currentTab, handleTabClick, tab]);

  const fetchMoreData = async () => {
    console.log("fetch more data");
  };

  return (
    <div className={styles.container}>
      <TabGroup tabType={form.values} onTabClick={handleTabClick} />

      <HeaderTable />

      <Scroll
        loading={false}
        data={[1, 2, 3, 4, 5, 6]}
        fetchMoreData={fetchMoreData}
        hasMore={false}
        emptyMessage="Không có dữ liệu"
        renderComponent={(index: number) => <OrderItem key={index} />}
      />
    </div>
  );
}

export type TabTypeProps = {
  waitForConfirmation: string;
  waitingForDelivery: string;
  delivering: string;
  delivered: string;
  canceled: string;
};


Order.layout = "Menu";
