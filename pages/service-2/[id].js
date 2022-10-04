import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Service2Page from "../../src/components/Service-2/Service2Page";
import Layouts from "../../src/layout/Layouts";
import PageBanner from "../../src/layout/PageBanner";


const Service2 = () => {
    const router = useRouter();
    const {name} = router.query; 
    const { t } = useTranslation('common');
    return (
      <Layouts>
        <PageBanner
          pageTitle={name}
          motherTitle={t("departments.page-banner-title")}
          url="all-services"
        />
        <Service2Page />
      </Layouts>
    );
  };
  
  export default Service2;