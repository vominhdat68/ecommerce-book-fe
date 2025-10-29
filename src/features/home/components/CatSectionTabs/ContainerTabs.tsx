import React from "react";
import { ActionButton } from "@/shared/components/Button";
import type { TabConfig } from "@/features/home/types/home.props";
import Tabs from "@/features/home/components/CatSectionTabs/Tabs";

type SectionTabsProps = {
  labelTabs: TabConfig[];
  activeTab: string;
  onTabChange: (key: string) => void;
  children: React.ReactNode; // chỗ để inject content (vd: SliderWrapperItems)
  onActionClick?: () => void;
};

const ContainerTabs: React.FC<SectionTabsProps> = ({
  labelTabs,
  activeTab,
  onTabChange,
  children,
  onActionClick,
}) => {

  return (
    <>
      <Tabs
        labelTabs={labelTabs.map((tab) => ({
          ...tab,
          active: activeTab === tab.key,
          onClick: () => onTabChange(tab.key),
        }))}
      />

      <div className="py-4">{children}</div>

      <div className="text-center mt-5 pb-5">
        <ActionButton
          variant="navigation"
          label="Xem thêm"
          onClick={onActionClick}
        />
      </div>
    </>
  );
};

export default ContainerTabs;
