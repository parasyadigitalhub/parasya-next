"use client";

import styles from "./homeblogs.module.css";

type BlogPost = {
    id: number;
    title: string;
    date: string;
    image: string;
    shortContent: string;
    fullContent: string;
};

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of AI in Digital Marketing",
        date: "March 15, 2024",
        image: "/blog-images/AI.webp",
        shortContent:
            "Exploring how artificial intelligence is revolutionizing the digital marketing landscape and what it means for businesses.",
        fullContent:
            "The future of AI in digital marketing is poised to transform the industry, offering businesses unprecedented opportunities...",
    },
    {
        id: 2,
        title: "Modern Web Development Trends",
        date: "March 12, 2024",
        image: "/blog-images/modernweb.webp",
        shortContent:
            "Discover the latest trends and technologies shaping the future of web development and user experience.",
        fullContent:
            "Modern web development is evolving rapidly, driven by new technologies and changing user expectations...",
    },
    {
        id: 3,
        title: "Maximizing ROI with Influencer Campaigns",
        date: "March 10, 2024",
        image: "/blog-images/roi.webp",
        shortContent:
            "Strategic approaches to influencer marketing and how to measure campaign success effectively.",
        fullContent:
            "Maximizing ROI with influencer campaigns requires a thoughtful, data-driven approach...",
    },
];

export default function HomeBlogs() {

    return (
        <div className={styles.blogs}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    <h3>
                        Latest <span className={styles.red}>Blogs</span>
                    </h3>
                </div>
                <div className={styles.content}>
                    <p>
                        Stay updated with our latest thoughts on digital marketing and
                        technology
                    </p>
                </div>
            </div>

            <div className={styles.cards}>
                {blogPosts.map((blog) => (
                    <div className={styles.loop} key={blog.id}>
                        <div className={styles.card}>
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className={styles.cardImgTop}
                                loading="lazy"
                            />
                            <div className={styles.cardBody}>
                                <small>{blog.date}</small>
                                <h5>{blog.title}</h5>
                                <p>{blog.shortContent}</p>
                                <span
                                    className={styles.readMore}
                                >
                                    Read More →
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
