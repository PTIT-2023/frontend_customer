import { Box, Text } from "@mantine/core";
import typo from "@/styles/text.module.css";

const OrderDetailHeader = () => {
  return (
    <Box px={20} style={style}>
      <Text className={`${typo.size_20_600} `}>Image</Text>
      <Text className={`${typo.size_20_600} `}>Product Name</Text>
      <Text className={`${typo.size_20_600} `}>Quantity</Text>
      <Text className={`${typo.size_20_600} `}>Price</Text>
      <Text className={`${typo.size_20_600} `}>Total Price</Text>
    </Box>
  );
};
export default OrderDetailHeader;
const style = {
  display: "grid",
  gridTemplateColumns: " 1fr 1fr 1fr 0.5fr 0.5fr",
  backgroundColor: "#9f9f9f ",
  padding: "0.8rem 0",
  marginTop: "1rem",
};
