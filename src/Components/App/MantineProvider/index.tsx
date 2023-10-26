import { ReactNode } from "react";
import { MantineProvider as Provider } from "@mantine/core";

type MantineProviderProps = {
  children: ReactNode;
};

export function MantineProvider({ children }: MantineProviderProps) {
  return (
    <Provider
      theme={{
        colors: {
          brand: [
            "#A6B1C2",
            "#8E9FB9",
            "#758EB4",
            "#5B7DB3",
            "#436EB3",
            "#3061AF",
            "#1D55AE",
            "#274F90",
            "#2D4A78",
            "#2F4465",
          ],
        },
        primaryColor: "brand",
      }}
    >
      {children}
    </Provider>
  );
}
