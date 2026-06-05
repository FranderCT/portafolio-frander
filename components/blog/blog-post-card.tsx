import Link from "next/link";
import { getBlogPath, type BlogPost } from "@/lib/blog";

export function BlogPostCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.date).toLocaleDateString(
    post.locale === "es" ? "es-CR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <article className="group relative rounded-2xl border border-border/60 bg-card/40 p-6 transition hover:border-border hover:bg-card/70">
      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <time dateTime={post.date}>{formattedDate}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
        <Link href={getBlogPath(post.locale, post.slug)} className="after:absolute after:inset-0 relative">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {post.description}
      </p>
      {post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
