"use client";

import { Component, type ReactNode } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              {/* Animated Error Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="mb-8"
              >
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                >
                  <span className="text-8xl">🙀</span>
                </motion.div>
              </motion.div>

              {/* Error Message */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
                  Oops! Something went wrong
                </h1>
                <p className="text-xl text-muted-foreground mb-2">
                  Our Bengal knocked something over...
                </p>
                <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto font-mono bg-muted p-3 rounded">
                  {this.state.error?.message || 'Unknown error occurred'}
                </p>
              </motion.div>

              {/* Animated Cat */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-12 max-w-md mx-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/images/featured-cat.jpg"
                    alt="Innocent Bengal Cat"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-6">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-white font-bold text-lg"
                    >
                      &quot;It wasn&apos;t me!&quot; 😼
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  onClick={() => window.location.reload()}
                  className="group"
                >
                  <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                  Try Again
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Go Home
                  </Link>
                </Button>
              </motion.div>

              {/* Fun Footer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-12 text-muted-foreground italic"
              >
                Don&apos;t worry, our Bengals are natural troublemakers. We&apos;ll clean this up! 🧹
              </motion.p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

