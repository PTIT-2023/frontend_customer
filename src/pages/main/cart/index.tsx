import { HeaderTable } from "@/Components/Main/Cart/HeaderTable";
import styles from "./index.module.css";
import { CartItem } from "@/Components/Main/Cart/CartItem";
import { Scroll } from "@/Components/Common/Scroll";
import { CartFooter } from "@/Components/Main/Cart/CartFooter";

export default function Cart() {
  const fetchMoreData = async () => {
    console.log("fetch more data");
  };

  return (
    <div className={styles.container}>
      <HeaderTable />
      <Scroll
        loading={false}
        data={[1, 2, 3, 4]}
        fetchMoreData={fetchMoreData}
        hasMore={false}
        emptyMessage="Không có dữ liệu"
        renderComponent={(index: number) => <CartItem key={index} />}
      />
      <CartFooter />
    </div>
  );
}

Cart.layout = "Menu";
