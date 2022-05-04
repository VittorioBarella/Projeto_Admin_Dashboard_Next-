import useAppData from "../../data/hook/useAppData";
import ForceAuthentication from "../auth/ForceAuthentication";
import Content from "./Content";
import Header from "./Header";
import MenuSidebar from "./MenuSidebar";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData();
  return (
    <ForceAuthentication>
      <div className={`${theme} flex h-screen w-screen`}>
        <MenuSidebar />
        <div
          className={`
                flex flex-col w-full p-7 
                bg-gray-300 dark:bg-gray-800
            `}
        >
          <Header title={props.title} subTitle={props.subTitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </ForceAuthentication>
  );
}
