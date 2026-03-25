export default function Loading() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-12 animate-pulse">
      <div className="text-center mb-12">
        <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4" />
        <div className="h-5 w-96 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded-xl" />
        ))}
      </div>
    </main>
  );
}
