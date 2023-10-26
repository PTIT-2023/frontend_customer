export const menuList = [
  {
    id: 1,
    label: "TRANG CHỦ",
    address: "/main",
  },
  {
    id: 2,
    label: "SẢN PHẨM",
    address: "/main/products",
    link: "/main/products?tab=all",
  },
  {
    id: 3,
    label: "Giỏ hàng",
    address: "/main/cart",
    icon: "/images/cart.svg",
    activeIcon: "/images/cart_active.svg",
  },
  {
    id: 4,
    label: "Đơn hàng",
    address: "/main/order",
    icon: "/images/order.svg",
    activeIcon: "/images/order_active.svg",
  },
  {
    id: 5,
    label: "Tài khoản",
    address: "/main/account",
    icon: "/images/account.svg",
    activeIcon: "/images/account_active.svg",
  },
  {
    id: 6,
    label: "Đăng xuất",
    address: "/login",
    icon: "/images/logout.svg",
  },
];
