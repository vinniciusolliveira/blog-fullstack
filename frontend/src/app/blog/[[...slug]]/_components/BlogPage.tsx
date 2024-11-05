import Nav from "@/app/_components/Nav";
import CarouselSection from "./CarouselSection/CarouselSection";
import Content from "./Content/Content";
import MenuContent from "./MenuContent/MenuContent";
import Footer from "@/app/_components/Footer";




const BlogPage: React.FC = () => {
    return (
        <div className="min-h-screen max-w-screen bg-background">
          <Nav/>
          <div className="flex justify-center pt-16">
            <div className="w-[70%]">
              <section className="h-[50rem] flex justify-center items-center">
                <div className="h-[45rem] w-full">
                  <div className="h-full w-full"><CarouselSection/></div>
                </div>
              </section>
              <section className="min-h-screen flex flex-row">
                <div className="w-8/12">
                  <div className="h-full w-full"><Content/></div>
                  <div className="w-full h-10 flex justify-center items-center">
                    <button className="whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2">Ver mais</button>
                  </div>
                </div>
                <div className="w-4/12 flex justify-center">
                  <MenuContent/>
                </div>
              </section>
              <section className="h-[7.5rem] w-full"></section>
            </div>
          </div>
          <Footer/>
        </div>
      );
};

export default BlogPage;