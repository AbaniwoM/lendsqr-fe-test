import { render, screen, cleanup } from '@testing-library/react';
// import Dashboard from '../../screens/Dashboard/Dashboard';
import UserCard from '../../screens/User/UserCard';
import renderer from 'react-test-renderer';

afterEach(() => {
    cleanup();
});

test('should render userCard component', () => {
    render(<UserCard img={''} desc={''} count={0} />);
    const userCardElement = screen.getByTestId('userCard-1');
    expect(userCardElement).toBeInTheDocument();
})

test('should render userImg class', () => {
    render(<UserCard img={''} desc={''} count={0} />);
    const userImgClass = screen.getByTestId('userImg-1');
    expect(userImgClass).toBeInTheDocument();
    expect(userImgClass).toHaveClass("userImg");
});

test('should render userDesc class', () => {
    render(<UserCard img={''} desc={''} count={0} />);
    const userDescClass = screen.getByTestId('userDesc-1');
    expect(userDescClass).toBeInTheDocument();
    expect(userDescClass).toHaveClass("userDesc");
});

test('should render userCount class', () => {
    render(<UserCard img={''} desc={''} count={0} />);
    const userCountClass = screen.getByTestId('userCount-1');
    expect(userCountClass).toBeInTheDocument();
    expect(userCountClass).toHaveClass("userCount");
});

test('matches snapshot', () => {
    const tree = renderer.create(<UserCard img={''} desc={''} count={0} />).toJSON();
    expect(tree).toMatchSnapshot();
})