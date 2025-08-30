import ScrollSection from "@/components/ScrollSection";
import HomeMission from "../home/mission/page";
import Journey from "./journey/page";
import Process from "./process/page";
import Team from "./team/page";
import Values from "./values/page";
import Welcome from "./welcome/page";

export default function AboutPage() {
    return (
        <>
            <ScrollSection direction="up">
                <Welcome />
            </ScrollSection>

            <ScrollSection direction="right">
                <HomeMission />
            </ScrollSection>

            <ScrollSection direction="left">
                <Process />
            </ScrollSection>

            <ScrollSection direction="up">
                <Journey />
            </ScrollSection>

            <ScrollSection direction="zoom">
                <Values />
            </ScrollSection>

            <ScrollSection direction="fade" delay={0.2}>
                <Team />
            </ScrollSection>
        </>
    );
}
