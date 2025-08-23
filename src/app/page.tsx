import HomeAbout from "./home/about/page";
import Carousel from "./home/carousel/page";
import HeroSection from "./home/planet/page";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <Carousel autoplayDelay={2000} />
            <HomeAbout/>
        </main>
    );
}
