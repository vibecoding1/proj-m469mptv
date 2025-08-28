export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to proj-m469mptv
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            VibeCoding Project: moon
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🎉 Your website is live!
            </h2>
            <p className="text-gray-600 mb-6">
              This is your new website built with VibeCoding. Start chatting with AI to customize and enhance your site.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">✨ AI-Powered</h3>
                <p className="text-blue-700 text-sm">
                  Built using advanced AI technology
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">🚀 Auto-Deployed</h3>
                <p className="text-green-700 text-sm">
                  Automatically deployed to Railway
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Project ID: m469mptv
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}