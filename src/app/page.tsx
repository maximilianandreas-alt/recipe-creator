export default function HomePage() {
  return ( 
    <div className="space-y-12">
      {/* Hero Section with Gradient [cite: 37, 101] */}
      <section className="hero-gradient py-12 rounded-lg text-center">
        <h1 className="text-4xl font-medium text-gray-900 mb-4">Discover Delicious Recipes</h1>
        <p className="text-gray-600">Search, save, and add personal notes.</p>
      </section>

      {/* FR008: Search Interface Placeholder */}
      <section id="search" className="space-y-4">
        <h2 className="text-xl font-medium">Search Recipes</h2>
        <div className="h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center px-4 text-gray-400 italic">
          Team: Implement Search Input here...
        </div>
      </section>

      {/* Featured Recipes Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Team: Map through recipes and render RecipeCard components here */}
      </section>
    </div>
  );
}