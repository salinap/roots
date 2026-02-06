import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  ogImage?: string;
};

export const Seo = ({
  title,
  description,
  canonicalUrl,
  noindex,
  ogImage,
}: SeoProps) => {
  const metaTitle = title ? `Root's | ${title}` : "Root's";
  useEffect(() => {
    if (metaTitle) {
      document.title = metaTitle;
    }
  }, [metaTitle]);
  return (
    <Helmet>
      {metaTitle && <title>{metaTitle}</title>}
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* OpenGraph */}
      <meta property="og:site_name" content="Pax" />
      {metaTitle && <meta property="og:title" content={metaTitle} />}
      {description && <meta property="og:description" content={description} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {metaTitle && <meta name="twitter:title" content={metaTitle} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};
