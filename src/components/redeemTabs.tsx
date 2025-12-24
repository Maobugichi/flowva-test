import { Tabs } from "antd";
import { AllRewards } from "./rewards/allRewards";
import { UnlockedRewards } from "./unlocked";
import { ComingSoon } from "./comingSoon";
import { LockedRewards } from "./locked";
import { rewards } from "./rewards";

const items = [
  {
    key: "1",
    label: (
      <span className="flex items-center gap-2">
        All Rewards
        <span className="text-xs bg-[#E2E8F0] text-[#CBD5E0] px-2 py-0.5 rounded-full">
          {rewards.length}
        </span>
      </span>
    ),
    children: <AllRewards />,
  },
  {
    key: "2",
    label: (
      <span className="flex items-center gap-2">
        Unlocked
        <span className="text-xs  px-2 py-0.5 bg-[#E2E8F0] text-[#CBD5E0] rounded-full">
          {rewards.filter((item) => !item.locked).length}
        </span>
      </span>
    ),
    children: <UnlockedRewards />,
  },
  {
    key: "3",
    label: (
      <span className="flex items-center gap-2">
        Locked
        <span className="text-xs  px-2 py-0.5 bg-[#E2E8F0] text-[#CBD5E0] rounded-full">
          {rewards.filter((item) => item.locked).length}
        </span>
      </span>
    ),
    children: <LockedRewards />,
  },
  {
    key: "4",
    label: (
      <span className="flex items-center gap-2">
        Coming Soon
        <span className="text-xs  px-2 py-0.5 bg-[#E2E8F0] text-[#CBD5E0] rounded-full">
          {rewards.filter((item) => item.comingSoon).length}
        </span>
      </span>
    ),
    children: <ComingSoon />,
  },
];

export const ReedemTabs = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      className="
        mt-10
        [&_.ant-tabs-tab-btn]:text-[16px]
        [&_.ant-tabs-tab-btn]:text-[#6C757D]
        [&_.ant-tabs-tab-btn]:px-4
        [&_.ant-tabs-tab.ant-tabs-tab-active_.ant-tabs-tab-btn]:font-semibold
        [&_.ant-tabs-tab-btn]:py-2
        [&_.ant-tabs-tab-btn]:font-normal
        [&_.ant-tabs-tab.ant-tabs-tab-active_.ant-tabs-tab-btn]:rounded-t-xl
        [&_.ant-tabs-tab.ant-tabs-tab-active_.ant-tabs-tab-btn]:text-[#9013FE]!
        [&_.ant-tabs-tab.ant-tabs-tab-active_.ant-tabs-tab-btn_span_span]:bg-[#9013fe1a]!
        [&_.ant-tabs-tab.ant-tabs-tab-active_.ant-tabs-tab-btn_span_span]:text-[#9013FE]!
      "
    />
  );
};