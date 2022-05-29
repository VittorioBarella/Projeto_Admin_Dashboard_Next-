/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useAuth from "../../data/hook/use-auth";
import {
  IconBell,
  IconExit,
  IconHealth,
  IconHouse,
  IconSettings,
} from "../../icons";
import MenuItem from "./menu-Item";

export default function MenuSidebar() {
  const { logout } = useAuth();
  return (
    <aside
      className={`
            flex flex-col absolute min-h-full z-10
            bg-gray-200 text-gray-700
            dark:bg-gray-900 p-0.5
        `}
    >
      <Link href="/">
        <img
          className=" flex flex-col justify-center logo"
          src="/images/logo.png"
          alt="Brand logo"
          width={100}
          height={60}
        />
      </Link>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home Page" icon={IconHouse} />
        <MenuItem url="/health" text="Health" icon={IconHealth} />
        <MenuItem url="/settings" text="Settings" icon={IconSettings} />
        <MenuItem url="/notifications" text="Notifications" icon={IconBell} />
      </ul>
      <ul>
        <MenuItem
          text="Exit"
          icon={IconExit}
          onClick={logout}
          className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
        />
      </ul>
    </aside>
  );
}
