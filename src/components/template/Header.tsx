import useAppData from "../../data/hook/useAppData";
import ButtonToggleTheme from "./ButtonToggleTheme";
import Title from "./Title";
import UserAvatar from "./UserAvatar";

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
        <UserAvatar className='ml-3' />
      </div>
    </div>
  );
}
