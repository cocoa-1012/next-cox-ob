import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import '@testing-library/jest-dom';

describe('Error Boundary', () => {
  test('Error Boundary', () => {
    const ThrowError = () => {
      throw new Error('Test the errorboundary');
    };
    render(
      <ErrorBoundary fallback={<ErrorBoundary />}>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('errorboundary')).toBeVisible();
  });
});