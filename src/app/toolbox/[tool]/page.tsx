import { notFound } from 'next/navigation';

interface ToolPageProps {
  params: {
    tool: string;
  };
}

export default function ToolPage({ params }: ToolPageProps) {
  const { tool } = params;
  
  // Convert kebab-case to title case
  const toolTitle = tool
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {toolTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our {toolTitle.toLowerCase()} tool and discover how it can enhance your marketing automation workflow.
          </p>
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Tool Documentation Coming Soon
            </h2>
            <p className="text-blue-700">
              We're preparing comprehensive documentation and tutorials for the {toolTitle.toLowerCase()} tool. 
              Check back soon for detailed guides and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
