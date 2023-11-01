import { NumberInput, Text } from "@mantine/core";
import styles from "./index.module.css";
import typo from "@/styles/text.module.css";
import { ProductImage } from "@/Components/Common/Icons/ProductImage";
import { IconClose } from "@/Components/Common/Icons/IconClose";
import { CartProps } from "@/types";
import { formatPrice } from "@/utils/string";
import { deleteCart } from "@/services";
import { showFailNotification, showSuccessNotification } from "@/utils/notifications";

type CartItemProps = {
  cart?: CartProps;
  onChangeQuantity: (id?: string, quantity?: string) => void;
  reload: () => void;
};

export function CartItem({ cart, onChangeQuantity, reload }: CartItemProps) {
  const onChange = (value: string | number) => {
    if(parseInt(value.toString()) <= (cart?.inventoryQuantity ?? 0)) {
      onChangeQuantity(cart?.id, value.toString());
    } else {
      alert("Chỉ còn lại " + cart?.inventoryQuantity + " sản phẩm");
    }
  };

  const onDelete = async () => {
    const res = await deleteCart(cart?.id);
    if(res) {
      reload();
      showSuccessNotification();
    } else {
      showFailNotification();
    }
  };

  return (
    <div className={styles.container}>
      <ProductImage src={cart?.imageUrl} width={106} height={66} className={styles.image} />
      <Text className={`${typo.size_14_600} ${styles.text}`}>{cart?.name}</Text>
      <NumberInput
        value={cart?.quantity}
        onChange={onChange}
        className={styles.numberInput}
        min={1}
      />
      <Text className={`${typo.size_14_600} ${styles.text}`}>{formatPrice(cart?.unitPrice)}</Text>
      <Text className={`${typo.size_14_600} ${styles.text}`}>{formatPrice(cart?.total)}</Text>
      <div className={styles.closeIcon} onClick={onDelete}>
        <IconClose />
      </div>
    </div>
  );
}
