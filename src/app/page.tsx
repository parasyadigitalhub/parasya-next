import ScrollSection from "@/components/ScrollSection";
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
import Meta from "@/components/meta"

export default function HomePage() {
    return (
        <>

            <Meta
                title="Elevate Your Identity"
                description="Your One-Stop Solution for Incorporation, Legal Support, Digital Marketing, and Cutting-Edge App & Web Development Services."
                image="/parasya/parasya.jpg"
                url="https://parasya.in"
            />

            <main>
                <HeroSection />

                <ScrollSection direction="up">
                    <Carousel />
                </ScrollSection>

                <ScrollSection direction="left">
                    <HomeAbout />
                </ScrollSection>

                <ScrollSection direction="right">
                    <HomeMission />
                </ScrollSection>

                <ScrollSection direction="zoom">
                    <Partner />
                </ScrollSection>

                <ScrollSection direction="up">
                    <ImageFlow />
                </ScrollSection>

                <ScrollSection direction="fade" delay={0.2}>
                    <HomeBlogs />
                </ScrollSection>

                <ScrollSection direction="up">
                    <HomeServices />
                </ScrollSection>

                <ScrollSection direction="zoom">
                    <Testimonials />
                </ScrollSection>

                <ScrollSection direction="up">
                    <LogoGrid />
                </ScrollSection>
            </main>
        </>
    );
}
