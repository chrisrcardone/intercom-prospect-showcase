import IntercomLandingPage from "@/components/IntercomLandingPage";

const Index = () => {
  // Example data - in a real implementation, this would come from props or API
  const landingPageData = {
    companyLogoUrl: "https://s3.amazonaws.com/media.mixrank.com/hero-img/69440ebc41d0e2ffaea978a06e9644c3",
    companyName: "Recharge",
    personalizedSubtitle: "Drive merchant adoption and streamline support for your leading subscription management platform.",
    revenueGrowthStatement: "Intercom's targeted messaging and onboarding flows will help Recharge educate merchants on subscription management features and drive adoption of premium offerings, supporting your continued 20% YoY revenue growth.",
    customerServiceStatement: "With a substantial customer service team, Recharge can leverage Intercom's team inbox and conversation routing to streamline support operations and maintain quality at scale, even with moderate monthly web traffic.",
    whyChooseStatement: "Intercom helps B2B subscription platforms like Recharge enhance customer engagement and support efficiency, reducing support costs while improving merchant satisfaction and retention."
  };

  return <IntercomLandingPage {...landingPageData} />;
};

export default Index;
