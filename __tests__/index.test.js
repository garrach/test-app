import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /welcome to glassmorphic ui/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the description paragraph', () => {
    render(<Home />);
    const paragraph = screen.getByText(/beautiful, modern interface built with tailwind css and next\.js/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the Get Started button', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: /get started/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the Learn More button', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: /learn more/i });
    expect(button).toBeInTheDocument();
  });
});
