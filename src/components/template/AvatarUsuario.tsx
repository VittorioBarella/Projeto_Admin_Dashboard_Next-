/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface AvatarUsuarioProps {
  className?: string;
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  // Pegando as informações do usuário através do hook UseAuth
  const { usuario } = useAuth();
  return (
    <Link href='/perfil'>
      <img
        // Imagem alternativa caso o usuário não esteja logado
        src={usuario?.imagemUrl ?? "images/avatar.svg"}
        alt='Avatar do Usuário'
        className={`
            h-10 w-10 rounded-full cursor-pointer
            ${props.className}
        `}
      />
    </Link>
  );
}
