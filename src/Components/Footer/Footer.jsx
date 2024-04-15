const Footer = () => {
  return (
    <div className="bg-[#0d1e50] py-5 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 text-white max-w-[1170px] mx-auto mb-5 text-center space-y-5">
        <nav className="font-poppins text-lg flex flex-col mt-5">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="font-poppins text-lg flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="font-poppins text-lg flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <footer className="py-4 border-t bg-[#0d1e50] max-w-[1170px] mx-auto text-white px-3 lg:px-0">
        <p className="text-xl text-center">
          T-State <br />
          Providing reliable Service since 2002
        </p>
      </footer>
    </div>
  );
};

export default Footer;
