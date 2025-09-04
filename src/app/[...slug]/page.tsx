// app/[...slug]/page.tsx
export const metadata = {
  title: "Matra Dristi Hospital – Coming Soon",
  description:
    "This page of Matra Dristi Hospital is under construction. Please check back soon!",
};

export default function ComingSoonPage({ params }: { params: { slug: string[] } }) {
  const pageName = params.slug.join(" ").toUpperCase();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">🚧 {pageName} – Coming Soon</h1>
        <p className="text-lg text-gray-700">
          We are working hard to bring you the {pageName} page. Please check back soon!
        </p>
      </div>
    </main>
  );
}
