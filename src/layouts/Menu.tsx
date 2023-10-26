import { ILayout, ILayoutProps } from "@/layouts";
import { Menu as MenuLayout } from "@/Components/Layout/Menu";

export const Menu: ILayout = ({ children }: ILayoutProps) => {
  return <MenuLayout>{children}</MenuLayout>;
};
