export const CartMiniSkeleton: React.FC = () => (
    <div className="minicart bg-white rounded-lg shadow-lg border border-gray-200 w-80">
        <div className="minicart-header p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
        <div className="minicart-content p-4">
            <div className="space-y-3">
                {[1, 2].map((item) => (
                    <div key={item} className="flex items-center space-x-3 animate-pulse">
                        <div className="w-12 h-12 bg-gray-200 rounded"></div>
                        <div className="flex-1 space-y-2">
                            <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                            <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);