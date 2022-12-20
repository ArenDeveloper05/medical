import About5 from "../src/components/Common/About-5";
import DepartmentDoctors1 from "../src/components/Department-single/DepartmentDoctors1";
import DepartmentPage from "../src/components/Department-single/DepartmentPage";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const DepartmentSingle = () => {
  return (
    <Layout>
      <PageBanner
        pageTitle="Cardiology"
        motherTitle="Departments"
        url="departments"
      />
      <DepartmentPage />
      <DepartmentDoctors1 />
      <About5 />
    </Layout>
  );
};

export default DepartmentSingle;
