import React, { Component } from 'react';
import ErrorPage from './ErrorPage';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
    this.clearState = this.clearState(this);
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }
  clearState() {
    this.setState({ error: null, errorInfo: null });
  }
  render() {
    if (this.state.error) {
      return <ErrorPage clearState={this.clearState}></ErrorPage>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
