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
        <>
          <EmptyState img={serviceUnavailable} desc="Something went wrong." />
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </>
      );
    }

    return this.props.children
  }
}

export default ErrorBoundary