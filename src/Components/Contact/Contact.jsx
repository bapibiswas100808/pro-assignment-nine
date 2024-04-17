import { Helmet } from "react-helmet-async";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-[1170px] mx-auto">
      <Helmet>
        <title>E-Estate|Contact</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10">
            <div className="text-center lg:text-left w-full lg:w-1/2">
              <h1 className="text-2xl lg:text-3xl font-bold">Get In Touch</h1>
              <p className="py-4">
                Contact E-Estate real estate company for expert property
                services. Discover your dream home or investment opportunity
                with our professional assistance. Call us today to begin your
                real estate journey.
              </p>
              <div>
                <p>
                  <span className="text-xl font-semibold">Address:</span> 123
                  Main Street, Anytown, USA
                </p>
                <p>
                  <span className="text-xl font-semibold">Email: </span>
                  info@e-estate.com
                </p>
                <p>
                  <span className="text-xl font-semibold">Phone:</span> (555)
                  123-4567
                </p>
              </div>
              <div className="flex gap-4 mt-4 text-2xl">
                <span>
                  <FaFacebook className="text-[#0866FF] cursor-pointer" />
                </span>
                <span>
                  <FaInstagramSquare className="text-[#DE4468] cursor-pointer" />
                </span>
                <span>
                  <FaLinkedin className="text-[#0077B5] cursor-pointer" />
                </span>
                <span>
                  <FaTwitter className="text-[#1DA1F2] cursor-pointer" />
                </span>
              </div>
            </div>
            <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100 w-full lg:w-1/2">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Write your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="write your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-white bg-[#ff3e55] hover:bg-primary">
                    Book An Appointment1
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
