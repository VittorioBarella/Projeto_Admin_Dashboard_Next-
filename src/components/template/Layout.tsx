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
      <div
        className={`${theme} flex h-screen w-screen overflow-x-hidden overflow-y-scroll `}
      >
        <MenuSidebar />
        <div
          className={`
                ml-24 mx-auto my-auto
                flex flex-col w-full p-7 relative
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
