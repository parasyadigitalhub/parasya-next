"use client";

import { useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import IntroAnimation from "./intro/IntroAnimation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showAnimation, setShowAnimation] = useState(true);

    return showAnimation ? (
        <IntroAnimation onFinish={() => setShowAnimation(false)} />
    ) : (
        <div className="app-layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
