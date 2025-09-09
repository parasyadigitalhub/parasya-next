"use client";

import { useState } from "react";
import styles from "./services.module.css";
import { BsChevronDown } from "react-icons/bs";
import ScrollSection from "@/components/ScrollSection";

interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

function Accordion({ items }: AccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.accordian}>
            {items.map((item, index) => (
                <div key={item.id} className={styles.accordionItem}>
                    <button
                        className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ""
                            }`}
                        onClick={() => toggleItem(index)}
                    >
                        <span>{item.title}</span>
                        <BsChevronDown
                            className={`${styles.arrow} ${activeIndex === index ? styles.rotated : ""
                                }`}
                        />
                    </button>
                    <div
                        className={`${styles.accordionBody} ${activeIndex === index ? styles.show : ""
                            }`}
                    >
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Services() {
    const brandConsultationItems: AccordionItem[] = [
        {
            id: "1",
            title: "Application Modernization",
            content:
                "Legacy applications can hinder your agility. We modernize your applications to leverage the latest technologies, improve performance, and ensure scalability for future growth.",
        },
        {
            id: "2",
            title: "DevOps and Agile",
            content:
                "Streamline development processes and accelerate delivery with our DevOps and Agile solutions.",
        },
        {
            id: "3",
            title: "API & Microservices",
            content:
                "Design and deploy robust APIs and microservices for seamless integration across your systems.",
        },
        {
            id: "4",
            title: "Hyperscaler Cloud Migration",
            content:
                "Migrate to hyperscaler cloud platforms effortlessly and achieve new scalability heights.",
        },
        {
            id: "5",
            title: "Cybersecurity",
            content:
                "Ensure the security of your digital assets with our comprehensive cybersecurity solutions.",
        },
    ];

    const legalItems: AccordionItem[] = [
        {
            id: "6",
            title: "Legal Advisory",
            content:
                "Strategic legal advice to navigate complex regulations and safeguard your business interests.",
        },
        {
            id: "7",
            title: "Company Incorporation",
            content:
                "Seamless and hassle-free incorporation services, ensuring your business is legally set up for success.",
        },
        {
            id: "8",
            title: "Trademark Registration",
            content:
                "Protect your brand identity with our end-to-end trademark services, from filing to management.",
        },
        {
            id: "9",
            title: "ITR Filing and Tax Compliance",
            content:
                "Expert guidance and assistance with Income Tax Return (ITR) filings and compliance.",
        },
    ];

    const softwareItems: AccordionItem[] = [
        {
            id: "10",
            title: "Custom Software Solutions",
            content:
                "Bespoke solutions that address unique business challenges and requirements.",
        },
        {
            id: "11",
            title: "UI/UX Design",
            content:
                "User interfaces and experiences that are both visually appealing and highly functional.",
        },
        {
            id: "12",
            title: "Web Application Development",
            content:
                "Scalable, secure, and high-performance web apps tailored to your business needs.",
        },
        {
            id: "13",
            title: "Mobile App Development",
            content:
                "Cross-platform mobile apps built to enhance user experience and drive engagement.",
        },
        {
            id: "14",
            title: "SEO",
            content:
                "Optimize websites to rank higher on search engines, driving organic traffic and improving visibility.",
        },
        {
            id: "15",
            title: "Maintenance and Support",
            content:
                "Ongoing technical support to ensure seamless operation of your Software.",
        },
    ];

    const brandingItems: AccordionItem[] = [
        {
            id: "16",
            title: "Brand Strategy Development",
            content:
                "Crafting unique brand voices and positioning strategies that resonate.",
        },
        {
            id: "17",
            title: "Social Media",
            content:
                "Develop and manage social media campaigns that boost brand awareness, engagement, and community building.",
        },
        {
            id: "18",
            title: "Content Creation",
            content:
                "Developing compelling content that drives engagement and builds brand loyalty.",
        },
        {
            id: "19",
            title: "Social Media Campaigns",
            content:
                "Creating impactful campaigns across platforms like Instagram, Facebook, LinkedIn, and more.",
        },
        {
            id: "20",
            title: "Digital Advertising",
            content: "Targeted ad campaigns designed for maximum ROI.",
        },
        {
            id: "21",
            title: "Analytics and Reporting",
            content: "Detailed insights to track performance and refine strategies.",
        },
    ];

    return (
        <div className={styles.containerFluid}>
            <div className={styles.heading}>
                <h1>Services</h1>
            </div>

            <div className={styles.details}>
                {/* Brand Consultation */}
                <ScrollSection direction="up">
                    <div className={styles.consult}>
                        <div className={styles.name}>
                            <h1>Brand Consultation</h1>
                            <p>
                                Streamline your operations and empower innovation with our strategic
                                digital transformation solutions. In today&apos;s dynamic business
                                landscape, staying ahead of the curve is crucial. We help you
                                navigate the digital transformation journey, from strategy
                                development to implementation.
                            </p>
                        </div>
                        <Accordion items={brandConsultationItems} />
                    </div>
                </ScrollSection>

                {/* Legal */}
                <ScrollSection direction="right">
                    <div className={styles.legal}>
                        <div className={styles.name}>
                            <h1>Legal Support & Compliance</h1>
                            <p>
                                In today&apos;s regulatory environment, legal compliance and proper
                                documentation are crucial. We offer a comprehensive range of legal
                                support services tailored to startups, SMEs, and established
                                enterprises alike.
                            </p>
                        </div>
                        <Accordion items={legalItems} />
                    </div>
                </ScrollSection>

                {/* Software */}
                <ScrollSection direction="left">
                    <div className={styles.soft}>
                        <div className={styles.name}>
                            <h1>Software Development</h1>
                            <p>
                                Technology is at the heart of business growth. We specialize in
                                creating user-centric web and mobile applications tailored to your
                                specific needs. Our software development services focus on
                                delivering scalable, high-performance solutions.
                            </p>
                        </div>
                        <Accordion items={softwareItems} />
                    </div>
                </ScrollSection>

                {/* Branding */}
                <ScrollSection direction="zoom">
                    <div className={styles.brand}>
                        <div className={styles.name}>
                            <h1>Branding and Social Media Marketing</h1>
                            <p>
                                At Parasya, we understand that a strong brand is key to standing
                                out in today&apos;s crowded marketplace. Our branding and digital
                                marketing services are designed to build and enhance your brand
                                identity while connecting you with your target audience.
                            </p>
                        </div>
                        <Accordion items={brandingItems} />
                    </div>
                </ScrollSection>
            </div>
        </div>
    );
}
