import About5 from "../src/components/Common/About-5";
import Info2 from "../src/components/Common/Info-2";
import Demo2About4 from "../src/components/Demo-2/Demo2About4";
import Demo2About5 from "../src/components/Demo-2/Demo2About5";
import Demo2Banner2 from "../src/components/Demo-2/Demo2Banner2";
import Demo2Banner8 from "../src/components/Demo-2/Demo2Banner8";
import Demo2Blog1 from "../src/components/Demo-2/Demo2Blog1";
import Demo2Doctors1 from "../src/components/Demo-2/Demo2Doctors1";
import Demo2Gallery1 from "../src/components/Demo-2/Demo2Gallery1";
import Demo2Hero2 from "../src/components/Demo-2/Demo2Hero2";
import Demo2Info3 from "../src/components/Demo-2/Demo2Info3";
import Demo2Reviews2 from "../src/components/Demo-2/Demo2Reviews2";
import Demo2Services2 from "../src/components/Demo-2/Demo2Services2";
import Demo2Statistic2 from "../src/components/Demo-2/Demo2Statistic2";
import Demo2Tabs1 from "../src/components/Demo-2/Demo2Tabs1";
import Layouts from "../src/layout/Layouts";

const Home = () => {
  return (
    <Layouts>
      <Demo2Hero2 />
      {/* END HERO-2 */}
      {/* ABOUT-4
			============================================= */}
      <About5 />
      {/* END ABOUT-5 */}
      {/* SERVICES-2
			============================================= */}
      <Demo2Blog1 />
      {/* END BLOG-1 */}
      {/* BANNER-8
			============================================= */}
      <Demo2Services2 />
      {/* END SERVICES-2 */}
      {/* INFO-3
			============================================= */}
       <Demo2Doctors1 />
      {/* END DOCTORS-1 */}
      {/* BANNER-2
			============================================= */}
      <Demo2Gallery1 />
      {/* END GALLERY-1 */}
      {/* ABOUT-6
			============================================= */}
    </Layouts>
   
  );
};

export default Home;
