'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class VideoErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Video Error Boundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center bg-charcoal-800 rounded-lg min-h-[200px]">
          <p className="text-text-muted text-sm">Video unavailable</p>
        </div>
      );
    }

    return this.props.children;
  }
}
