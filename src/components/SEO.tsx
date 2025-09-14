import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
}

export default function SEO({ title, description, keywords, author }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
    </Head>
  );
}
