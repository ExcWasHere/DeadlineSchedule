import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LoaderProps {
  isVisible?: boolean;
  onLoadingComplete?: () => void;
  duration?: number;
}

const Loader: React.FC<LoaderProps> = ({
  isVisible = true,
  onLoadingComplete,
  duration = 7000,
}) => {
  const [showLoader, setShowLoader] = useState(isVisible);
  const navigate = useNavigate();

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        setShowLoader(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
        navigate("/dashboard");
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onLoadingComplete, navigate]);

  if (!showLoader) return null;

  return (
    <div
      id="loader"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-6">
          <img
            src="/deadlinehunter.png"
            alt="DeadlineHunter Logo"
            className="w-full h-full object-contain animate-pulse animate-bounce"
            id="loader-logo"
          />
        </div>

        <p className="text-red-600 text-lg font-medium text-center mb-8">
          "Jangan biarkan deadline membunuhmu"
        </p>

        {/* Loading Bar */}
        <div className="w-80">
          {/* Moving Light Effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            w-20 h-full animate-pulse rounded-full"
            style={{
              animation: "shimmer 2s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm text-gray-500">Sabar Bolo...</span>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const AppWithLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {/* Loader */}
      <Loader
        isVisible={isLoading}
        onLoadingComplete={handleLoadingComplete}
        duration={7000}
      />
    </div>
  );
};

export default AppWithLoader;
export { Loader };