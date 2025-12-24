import { Tabs } from "antd";
import  { EarnPoints } from "../tabs/earnPoints";
import { RedeemRewards } from "../tabs/redeemRewards";


const items = [
  {
    key: "1",
    label: "Earn Points",
    children: <EarnPoints/>,
  },
  {
    key: "2",
    label: "Redeem Rewards",
    children: <RedeemRewards/>,
  }
];

export const RewardsTabs = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      className="
        mt-20
        [&_.ant-tabs-tab]:font-system
        [&_.ant-tabs-tab]:pb-0!
        [&_.ant-tabs-tab-btn]:text-[16px]
        [&_.ant-tabs-tab-btn]:
        [&_.ant-tabs-tab-btn]:px-2
        [&_.ant-tabs-tab-btn]:py-3
        [&_.ant-tabs-tab-btn]:text-[#6C757D]
         
        [&_.ant-tabs-tab-btn]:font-normal
        [&_.ant-tabs-tab-btn]:
        [&_.ant-tabs-tab.ant-tabs-tab-active_.ant-tabs-tab-btn]:rounded-t-xl
      
        [&_.ant-tabs-tab.ant-tabs-tab-active_.ant-tabs-tab-btn]:text-[#9013FE]!
        [&_.ant-tabs-tab.ant-tabs-tab-active_.ant-tabs-tab-btn]:font-semibold
        [&_.ant-tabs-tab.ant-tabs-tab-active_.ant-tabs-tab-btn]:bg-[#9013fe0d]
        
        "
    />
  );
};
