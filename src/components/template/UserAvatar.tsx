/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface AvatarUserProps {
  className?: string;
}

export default function AvatarUser(props: AvatarUserProps) {
  // Getting user information through UseAuth hook
  const { user } = useAuth();
  return (
    <Link href='/profile'>
      <img
        // Alternative image if the user is not logged in
        src={user?.imageUrl ?? "/images/avatar.svg"}
        alt='Avatar User'
        className={`
            h-10 w-10 rounded-full cursor-pointer
            ${props.className}
        `}
      />
    </Link>
  );
}
