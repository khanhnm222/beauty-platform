const Footer = () => {
  return (
    <footer className="bg-primary/10 font-sans dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">

        <div className="sm:flex sm:items-center sm:justify-between lg:max-h-[12px] md:max-h-[12px]">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
            <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            <p className="text-primary font-sans p-8 text-start md:text-center md:text-lg md:p-4">©2024 Belle Platform</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;