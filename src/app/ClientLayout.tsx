"use client";

import { useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import IntroAnimation from "./intro/IntroAnimation";
import Breadcrumb from "@/components/breadcrumbs/Breadcrumb";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showAnimation, setShowAnimation] = useState(true);

    return showAnimation ? (
        <IntroAnimation onFinish={() => setShowAnimation(false)} />
    ) : (
        <div className="app-layout">
            <Header />
            <Breadcrumb />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
