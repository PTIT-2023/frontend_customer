import { Scroll } from "@/Components/Common/Scroll";
import { ProductCard } from "@/Components/Main/Products/ProductCard";
import { TabGroup } from "@/Components/Main/Products/TabGroup";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Products() {
  const router = useRouter();
  const { tab } = router.query;
  const [currentTab, setCurrentTab] = useState("");
  const form = useForm<TabTypeProps>({
    initialValues: {
      all: "GREEN",
      animal: "GRAY",
      plant: "GRAY",
    },
  });

  const handleTabClick = useCallback(
    (tabKey: string) => {
      const updatedButtonType: TabTypeProps = {
        all: "GRAY",
        animal: "GRAY",
        plant: "GRAY",
      };
      updatedButtonType[tabKey as keyof TabTypeProps] = "GREEN";
      form.setValues(updatedButtonType);
      setCurrentTab(tabKey);
      router.push("/main/products?tab=" + tabKey);
    },
    [form, router],
  );

  useEffect(() => {
    if (tab && !currentTab) {
      tab ? handleTabClick(tab as string) : handleTabClick("all");
    }
  }, [currentTab, handleTabClick, tab]);

  const fetchMoreData = async () => {
    console.log("fetch more data");
  };

  return (
    <div className={styles.container}>
      <TabGroup tabType={form.values} onTabClick={handleTabClick} />

      <Scroll
        loading={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        fetchMoreData={fetchMoreData}
        hasMore={false}
        emptyMessage="Không có dữ liệu"
        renderComponent={(index: number) => <ProductCard key={index} />}
        containerClassName={styles.scroll}
      />
    </div>
  );
}

export type TabTypeProps = {
  all: string;
  animal: string;
  plant: string;
};

Products.layout = "Menu";
