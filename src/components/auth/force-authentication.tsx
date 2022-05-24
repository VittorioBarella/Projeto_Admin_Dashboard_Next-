import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import loading from "../../../public/images/loading.gif";
import useAuth from "../../data/hook/use-auth";

export default function ForceAuthentication(props) {
  const { user, charging } = useAuth();

  function contentRender() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                if(!document.cookie?.includes("admin-template-auth")) {
                                    window.location.href = "/authentication"
                                }
                            `,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderCharging() {
    return (
      <div
        className={`
                flex justify-center items-center h-screen
            `}
      >
        <Image src={loading} />
      </div>
    );
  }

  if (!charging && user?.email) {
    return contentRender();
  } else if (charging) {
    return renderCharging();
  } else {
    router.push("/authentication");
    return null;
  }
}
