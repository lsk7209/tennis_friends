export default function Loading() {
  const widths = [100, 95, 88, 92, 85, 97, 90, 93];
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 animate-pulse">
      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-8" />
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-5 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
      <div className="space-y-4">
        {widths.map((w, i) => (
          <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded" style={{ width: `${w}%` }} />
        ))}
      </div>
    </main>
  );
}
