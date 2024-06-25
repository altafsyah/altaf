export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="mdx w-full bg-mYellow p-5 lg:p-10 card rounded-2xl">
      {children}
    </article>
  );
}
