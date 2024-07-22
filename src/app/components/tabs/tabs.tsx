import { Box, Tabs } from "@radix-ui/themes";
import React from "react";
import "@radix-ui/themes/styles.css";

interface TabsComponentProps {
  triggers: React.ReactNode;
  contents: React.ReactNode;
  tabsRootClassName: string;
  tabsListClassName: string;
  tabBoxClassName: string;
  defaultValue: string | number;
}

const TabsComponent: React.FC<TabsComponentProps> = ({
  triggers,
  contents,
  tabsRootClassName,
  tabsListClassName,
  tabBoxClassName,
  defaultValue,
}) => {
  return (
    <Tabs.Root defaultValue={defaultValue} className={tabsRootClassName}>
      <Tabs.List className={tabsListClassName}>{triggers}</Tabs.List>
      <Box className={tabBoxClassName}>{contents}</Box>
    </Tabs.Root>
  );
};

export default TabsComponent;
