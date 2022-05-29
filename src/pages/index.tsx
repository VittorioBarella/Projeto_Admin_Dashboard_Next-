import LatestAppointments from "../components/latest-appointments/latest-appointments";
import LatestTasks from "../components/latest-tasks/latest-tasks";
import Medicines from "../components/medicines/medicines";
import { HeaderStats } from "../components/template/header";
import Layout from "../components/template/layout";
import Calendar from "./../components/calendar/calendar";
export default function Home() {
  return (
    <Layout title="Home Page" subTitle="We are building an Day to Day App">
      <HeaderStats />
      <div className="flex flex-wrap">
        <div className="w-full xl:w-3/5 mb-12 xl:mb-0 px-4">
          <Calendar />
        </div>
        <div className="w-full xl:w-2/5 px-4">
          <LatestAppointments />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <Medicines />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <LatestTasks />
        </div>
      </div>
    </Layout>
  );
}
