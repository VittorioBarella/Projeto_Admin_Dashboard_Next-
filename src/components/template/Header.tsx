import useAppData from "../../data/hook/use-app-data";
import CardStats from "../cards/card-stats";
import ButtonToggleTheme from "./button-toggle-theme";

import Title from "./title";
import UserAvatar from "./user-avatar";

interface HeaderProps {
  title: string;
  subTitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, themeToggle } = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subTitle={props.subTitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonToggleTheme theme={theme} themeToggle={themeToggle} />
        <UserAvatar className="ml-3" />
      </div>
    </div>
  );
}
export function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md: pb-12 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MEDICINE"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-green-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TASK"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-blue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="APPOINTMENT"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-red-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="EVENT"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-green-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
