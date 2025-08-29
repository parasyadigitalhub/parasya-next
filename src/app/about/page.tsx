import HomeMission from "../home/mission/page";
import Journey from "./journey/page";
import Process from "./process/page";
import Team from "./team/page";
import Values from "./values/page";
import Welcome from "./welcome/page";

export default function AboutPage() {
    return (
        <>
        <Welcome/>
        <HomeMission/>
        <Process/>
        <Journey/>
        <Values/>
        <Team/>
        </>
    )
}