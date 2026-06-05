import type { Metadata } from "next";
import { BlogLayout } from "@/components/blog/blog-layout";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { getAllPosts } from "@/lib/blog";
import { buildBlogIndexMetadata, buildBlogIndexJsonLd } from "@/lib/blog-seo";

export const metadata: Metadata = buildBlogIndexMetadata("en");

export default function EnglishBlogPage() {
  const posts = getAllPosts("en");
  const blogSchema = buildBlogIndexJsonLd("en");

  return (
    <BlogLayout locale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <header className="mb-12">
        <p className="mb-3 font-mono text-sm font-medium text-muted-foreground">Blog</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Web development and technology for business
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Articles on custom development, Next.js, React, and technology consulting
          for companies in Costa Rica.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </BlogLayout>
  );
}
