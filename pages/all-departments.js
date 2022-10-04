import AllDepartmentServices7 from "../src/components/All-departments/AllDepartmentServices7";
import Banner5 from "../src/components/Common/Banner-5";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";
import useTranslation from "next-translate/useTranslation";

const AllDepartments = () => {
  const { t } = useTranslation('common');
  return (
    <Layouts>
      <PageBanner pageTitle={t("departments.page-banner-title")} />
      <AllDepartmentServices7 />
      <Banner5 />
    </Layouts>
  );
};

export default AllDepartments;
