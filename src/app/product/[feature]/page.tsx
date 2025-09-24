import { notFound } from 'next/navigation';

interface ProductFeaturePageProps {
  params: {
    feature: string;
  };
}

export default function ProductFeaturePage({ params }: ProductFeaturePageProps) {
  const { feature } = params;
  
  // Convert kebab-case to title case
  const featureTitle = feature
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {featureTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn more about our {featureTitle.toLowerCase()} feature and how it can help streamline your marketing efforts.
          </p>
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Feature Details Coming Soon
            </h2>
            <p className="text-blue-700">
              We&apos;re working hard to bring you detailed information about this feature. 
              Check back soon for comprehensive documentation and examples.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
