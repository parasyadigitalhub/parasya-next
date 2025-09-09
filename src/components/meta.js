import Head from "next/head";

export default function Meta({
    title = "Elevating Your Identity",
    description = "Your One-Stop Solution for Incorporation, Legal Support, Digital Marketing, and Cutting-Edge App & Web Development Services.",
    keywords = "Solution, Digital Marketing, Web Development, Cutting-Edge App, Legal Support",
    author = "Parasya",
    image = "/parasya/parasya.jpg",
    url = "https://parasya.in",
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Open Graph / Social Sharing */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}
