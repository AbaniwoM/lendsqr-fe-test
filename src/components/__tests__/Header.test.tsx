import { render, screen, cleanup } from '@testing-library/react';
// import Hamburger from '../Header/Hamburger';
// import Header from '../Header/Header';
// import Header from '../Header/Header';
import Logo from '../Logo/Logo';

afterEach(() => {
    cleanup();
})

test('should render logo component', () => {
    render(<Logo />);
    const logoElement = screen.getByTestId('logo-1');
    expect(logoElement).toBeInTheDocument();
})