
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [progress, setProgress] = useState(0);

  const steps = [
    { text: 'Initializing...', icon: '⚡' },
    { text: 'Loading portfolio...', icon: '📂' },
    { text: 'Ready!', icon: '✨' },
  ];

  useEffect(() => {
    setProgress(((currentStep + 1) / steps.length) * 100);
  }, [currentStep]);

  useEffect(() => {
    if (currentStep < steps.length) {
      const step = steps[currentStep];
      let charIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (charIndex < step.text.length) {
          setTypingText(step.text.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            if (currentStep === steps.length - 1) {
              setTimeout(() => onComplete(), 400);
            } else {
              setCurrentStep(prev => prev + 1);
              setTypingText('');
            }
          }, 300);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [currentStep, onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center font-mono">
      <div className="max-w-sm w-full mx-4 space-y-6">
        {/* Minimal Logo */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-6 border border-primary rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded animate-pulse"></div>
            </div>
            <h1 className="text-xl font-medium text-primary">SAGAR.DEV</h1>
          </div>
        </div>

        {/* Minimal Terminal */}
        <div className="border border-border rounded-md bg-card">
          {/* Terminal header */}
          <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-t-md border-b border-border">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-muted-foreground text-xs">loading</span>
            </div>
          </div>
          
          {/* Terminal content */}
          <div className="p-4 min-h-[80px]">
            {/* Completed steps */}
            {steps.slice(0, currentStep).map((step, index) => (
              <div key={index} className="flex items-center gap-2 text-sm mb-2">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">{step.text}</span>
              </div>
            ))}
            
            {/* Current step */}
            {currentStep < steps.length && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary animate-pulse">➜</span>
                <span className="text-primary">
                  {typingText}
                  <span className="animate-pulse ml-1">▋</span>
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Minimal progress bar */}
        <div className="space-y-2">
          <div className="w-full bg-muted rounded-full h-1">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center text-xs text-muted-foreground">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
