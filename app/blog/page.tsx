import type { Metadata } from "next";
import { BlogLayout } from "@/components/blog/blog-layout";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { getAllPosts } from "@/lib/blog";
import { buildBlogIndexMetadata, buildBlogIndexJsonLd } from "@/lib/blog-seo";

export const metadata: Metadata = buildBlogIndexMetadata("es");

export default function BlogPage() {
  const posts = getAllPosts("es");
  const blogSchema = buildBlogIndexJsonLd("es");

  return (
    <BlogLayout locale="es">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <header className="mb-12">
        <p className="mb-3 font-mono text-sm font-medium text-muted-foreground">Blog</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Desarrollo web y tecnología para negocios
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Artículos sobre desarrollo a medida, Next.js, React y asesoría tecnológica
          para empresas en Costa Rica.
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
