import WhyChooseUsOne from "@/components/whyChooseUs/WhyChooseUsOne";


const HomePage = () => {
  return (
    <div className="container mx-auto my-16">
      <div>
        <h2 className="lg:text-xl text-lg font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Why Choose Us</h2>
        <WhyChooseUsOne />
      </div>

    </div>
  );
};

export default HomePage;