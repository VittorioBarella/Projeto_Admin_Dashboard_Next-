import { HeaderStats } from "../components/template/Header";
import Layout from "../components/template/Layout";
export default function Home() {
  return (
    <Layout title='Home Page' subTitle='We are building an Admin template!'>
      <HeaderStats />
    </Layout>
  );
}
