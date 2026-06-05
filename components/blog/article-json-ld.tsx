import { buildArticleJsonLd } from "@/lib/blog-seo";
import type { BlogPost } from "@/lib/blog";

export function ArticleJsonLd({ post }: { post: BlogPost }) {
  const schema = buildArticleJsonLd(post);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
