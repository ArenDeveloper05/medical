import TimetablePage from "../src/components/Timetable/TimetablePage";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Timetable = () => {
  return (
    <Layout>
      <PageBanner pageTitle="Timetable" />
      <TimetablePage />
    </Layout>
  );
};

export default Timetable;
