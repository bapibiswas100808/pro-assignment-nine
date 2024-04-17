import { Helmet } from "react-helmet-async";
import aboutImage from "../../assets/images/slide3.jpg";

const About = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0 py-10">
      <Helmet>
        <title>E-Estate|About</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-5">
          <div
            className="flex-1 mb-5 lg:mb-0"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={aboutImage} className="rounded-lg shadow-2xl" />
          </div>
          <div
            className="flex-1 "
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h1 className="text-2xl lg:text-4xl font-bold font-roboto">
              About Us!
            </h1>
            <p className="py-6 font-poppins text-lg">
              E-Estate Real Estate Company, founded in 2002, specializes in
              residential and commercial property sales across Texas. Known for
              its client-focused approach, E-Estate offers personalized
              services, from property valuation to closing deals. Their expert
              team ensures seamless transactions, making it a trusted leader in
              the Texas real estate market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
