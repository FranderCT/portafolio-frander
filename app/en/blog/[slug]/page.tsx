import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/blog/article-json-ld";
import { BlogLayout } from "@/components/blog/blog-layout";
import { MarkdownContent } from "@/components/blog/markdown-content";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { buildBlogPostMetadata } from "@/lib/blog-seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");
  if (!post) return {};
  return buildBlogPostMetadata(post);
}

export default async function EnglishBlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <BlogLayout locale="en">
      <ArticleJsonLd post={post} />
      <article>
        <header className="mb-10 border-b border-border pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.date}>{formattedDate}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime} read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
        </header>

        <MarkdownContent content={post.content} />

        <footer className="mt-12 rounded-2xl border border-border/60 bg-card/40 p-6">
          <p className="text-sm text-muted-foreground">
            Was this helpful?{" "}
            <Link href="/en#contacto" className="font-medium text-foreground underline-offset-4 hover:underline">
              Contact me
            </Link>{" "}
            and we can apply these ideas to your business.
          </p>
        </footer>
      </article>
    </BlogLayout>
  );
}
