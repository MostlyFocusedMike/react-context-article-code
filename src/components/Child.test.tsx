import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Child from './Child';
import ExampleContextProvider from '../contexts/ExampleContext/ExampleContextProvider';
import ExampleContext from '../contexts/ExampleContext';

describe('Child Tests', () => {
  it('Works with context correctly', () => {
    render(
      <ExampleContextProvider>
        <Child />
      </ExampleContextProvider>
    );

    userEvent.click(screen.getByText('Click me'));
    const outputEl = screen.queryByText(/I am the context value/);
    expect(outputEl).toBeInTheDocument();
  });

  it('Can use the literal provider for more control', () => {
    const newVal = {
      example: 'Check me out!',
      setExample: vi.fn(),
    };

    render(
      // <ExampleContext value={newVal}> // v19
      <ExampleContext.Provider value={newVal}>
        <Child />
      </ExampleContext.Provider>
    );

    const outputEl = screen.queryByText(new RegExp(newVal.example));
    expect(outputEl).toBeInTheDocument();
  });
});
