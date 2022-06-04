import Layout from "../components/template/layout";

export default function Health() {
  return (
    <Layout title="Health" subTitle="Manage your Health information!">
      <div
        className={`
          flex flex-col w-full
          bg-white text-gray-800 rounded-md
        `}
      >
        <div className="p-6">
          <h1>Teste</h1>
        </div>
      </div>
    </Layout>
  );
}
