import useAppData from "../../data/hook/use-app-data";
import ForceAuthentication from "../auth/force-authentication";
import Content from "./content";
import Header from "./header";
import MenuSidebar from "./menu-sidebar";
interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData();
  return (
    <ForceAuthentication>
      <div className={`${theme} flex h-screen w-screen `}>
        <MenuSidebar />
        <div
          className={` 
                ml-24 
                flex flex-col overflow-auto w-full p-7 
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
