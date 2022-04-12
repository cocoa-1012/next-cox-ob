import React, { Component, ErrorInfo, ReactChildren, ReactNode, VoidFunctionComponent } from "react";
import { withTranslation, WithTranslation } from 'react-i18next';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State, WithTranslation> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { t }: any = this.props;
    if (this.state.hasError) {
      return (
        <section className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div data-testid="errorboundary" className="alert alert-danger" role="alert">
                <h4 className="alert-heading">{t('errorboundary_heading')}</h4>
                <p>
                {t('errorboundary_text')}
                </p>
              </div>
            </div>
          </div>
        </section>
      )
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);