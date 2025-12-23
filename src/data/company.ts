const companyDetails = {
  firstName: "GLOBE",
  lastName: "ERP",
  logo: "/logo.png",
  description:
    "We provide ERP based software solutions for businesses of all sizes.",
  routes: [
    { path: "/apps", name: "Apps" },
    { path: "/why", name: "Why Globe" },
    { path: "/services", name: "Services" },
    { path: "/pricing", name: "Pricing" },
    { path: "/help", name: "Help" },
  ],
  bannerInfo: {
    bannerImages: [
      "/banner1.jpg",
      "/banner2.jpg",
      // "/banner3.jpg",
      "/banner4.jpg",
    ],
    title: {
      firstPart: "Transform Your",
      lastPart: "Business Today"
    },
    description: "We provide ERP based software solutions for businesses of all sizes. Streamline operations, boost productivity, and drive growth with our cutting-edge ERP solutions. |  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum provident consectetur rem qui facere placeat molestias autem fugiat aspernatur harum eius eos sapiente esse, sed laboriosam maxime quidem ipsum ullam at nobis. Quam nemo ullam", //, natus necessitatibus dolorum facere aperiam ratione quis similique corporis eos laborum suscipit quidem reiciendis delectus praesentium ipsum laudantium ab a sit repellat perferendis non, debitis incidunt! Atque error corrupti id
    primaryBtnText: "Start Free Trial",
    primaryBtnLink: "",
    secondaryBtnText: "Watch Demo",
    secondaryBtnLink: "",
    stats: [
      {
        label : "Uptime",
        value : "99.9%"
      },
      {
        label : "Customers",
        value : "500+"
      },
      {
        label : "Support",
        value : "24/7"
      },
      {
        label : "Transactions",
        value : "1M+"
      },
    ],
  },
  contact: {
    phone: "+880 1729-348790",
    email: "info@company.com",
    address: "Rajshahi, Bangladesh",
  },
};

export default companyDetails;
