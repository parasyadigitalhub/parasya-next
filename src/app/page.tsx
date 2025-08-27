import HomeAbout from "./home/about/page";
import Carousel from "./home/carousel/page";
import HomeBlogs from "./home/homeblogs/page";
import HomeServices from "./home/homeservices/page";
import ImageFlow from "./home/imageflow/page";
import LogoGrid from "./home/logogrid/page";
import HomeMission from "./home/mission/page";
import Partner from "./home/partner/page";
import HeroSection from "./home/planet/page";
import Testimonials from "./home/testimonials/page";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <Carousel autoplayDelay={2000} />
            <HomeAbout/>
            <HomeMission/>
            <Partner/>
            <ImageFlow/>
            <HomeBlogs/>
            <HomeServices/>
            <Testimonials/>
            <LogoGrid/>
        </main>
    );
}
