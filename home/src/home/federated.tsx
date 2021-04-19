import React, { ComponentType, ErrorInfo, ReactNode, Suspense } from "react";

type FederatedWrapperProps = {
  error?: ReactNode;
  delayed?: ReactNode;
};

type FederatedWrapperState = {
  hasError: boolean;
};

class FederatedWrapper extends React.Component<
  FederatedWrapperProps,
  FederatedWrapperState
> {
  public state: FederatedWrapperState = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.error("Uncaught error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.error || <div>Something went wrong.</div>;
    }
    return (
      <Suspense fallback={this.props.delayed || <div />}>
        {this.props.children}
      </Suspense>
    );
  }
}

const federated = (Component: ComponentType): ComponentType<FederatedWrapperProps> => ({
  error,
  delayed,
  ...props
}) => (
  <FederatedWrapper error={error} delayed={delayed}>
    <Component {...props} />
  </FederatedWrapper>
);  

export { federated };
