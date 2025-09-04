'use client'
import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  timeoutId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  componentDidUpdate(_: Props, prevState: State) {
    if (this.state.hasError && !prevState.hasError) {
      this.timeoutId = setTimeout(() => {
        this.setState({ hasError: false, errorMessage: '' });
      }, 5000); 
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  closeNotification = () => {
    this.setState({ hasError: false, errorMessage: '' });
  };

  render() {
    return (
      <>
        {this.props.children}
        {this.state.hasError && (
          <div className="fixed bottom-5 right-5 bg-red-600 text-white p-3 rounded-lg shadow-lg max-w-xs text-sm z-50 flex items-start justify-between gap-2">
            <div>
              <strong>⚠ Wrong:</strong> {this.state.errorMessage}
            </div>
            <button
              className="text-white hover:text-gray-200 font-bold ml-2"
              onClick={this.closeNotification}
            >
              ✕
            </button>
          </div>
        )}
      </>
    );
  }
}
