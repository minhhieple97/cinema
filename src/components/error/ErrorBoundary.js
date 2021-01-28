import React, { Component } from 'react';
import ErrorPage from './ErrorPage';
import * as Sentry from "@sentry/react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, eventId: null };
    this.clearState = this.clearState.bind(this);
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });

    if (process.env.NODE_ENV === 'production') {
      Sentry.withScope((scope) => {
        scope.setTag('Custom-Tag', 'ErrorBoundary');
        scope.setLevel('Error');
        scope.setExtras(errorInfo);
        const eventId = Sentry.captureException(error);
        this.setState({ eventId });
      });
    }
  }
  clearState() {
    this.setState({ error: null, errorInfo: null, eventId: null });
  }
  render() {
    if (this.state.error) {
      return <ErrorPage clearState={this.clearState}></ErrorPage>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;