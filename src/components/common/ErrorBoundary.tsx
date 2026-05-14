import { Component } from "react";
import { EmptyState } from "@/components/common";
import { serviceUnavailable } from "@/assets";

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<any, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <EmptyState img={serviceUnavailable} desc="Something went wrong." />
          <button
            className="block mx-auto w-auto bg-zinc-600 hover:bg-zinc-500 text-white rounded-lg px-5 py-2 transition shadow-md cursor-pointer"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
