import { notFound } from 'next/navigation';

interface RolePageProps {
  params: {
    role: string;
  };
}

export default function RolePage({ params }: RolePageProps) {
  const { role } = params;
  
  // Convert kebab-case to title case
  const roleTitle = role
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            MarketingPro for {roleTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover how MarketingPro can help {roleTitle.toLowerCase()} professionals streamline their workflow and achieve better results.
          </p>
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Role-Specific Features Coming Soon
            </h2>
            <p className="text-blue-700">
              We&apos;re developing specialized features and workflows for {roleTitle.toLowerCase()} professionals. 
              Stay tuned for tailored solutions that fit your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
