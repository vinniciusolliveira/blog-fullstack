import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import CarouselSection from "./_components/CarouselSection/CarouselSection";
import MenuContent from "./_components/MenuContent/MenuContent";
import Content from "./_components/Content/Content";


const Home: React.FC = () => {
  return (
    
    <div className="min-h-screen max-w-screen">
      <Nav/>
      <div className="flex justify-center pt-16">
        <div className="w-[70%]">
          <section className="h-[50rem] flex justify-center items-center">
            <div className="h-[45rem] w-full bg-black">
              <div className="h-full w-full"><CarouselSection/></div>
            </div>
          </section>
          <section className="min-h-screen flex flex-row">
            <div className="w-8/12">
              <Content/>
            </div>
            <div className="w-4/12 flex justify-center">
              <MenuContent/>
            </div>
          </section>
          <section className="h-[7.5rem] w-full">teste</section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;