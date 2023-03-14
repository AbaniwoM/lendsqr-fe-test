// import { render, screen, cleanup } from '@testing-library/react';
// import Dashboard from '../../screens/Dashboard/Dashboard';
// import Login from '../../screens/Login/Login';
// import {
//     Routes,
//     Route,
// } from "react-router-dom";

// afterEach(() => {
//     cleanup();
// });

// test('should move user to dashboard when login button is clicked', () => {
//     render(
//         <Routes>
//             <Route path="/" element={<Login />}/>
//             <Route path="/dashboard" element={<Dashboard />}/>
//         </Routes>
//     );
//     const loginButton = screen.getByTestId('logo-1');
//     MouseEvent.click(screen.getByRole('navigation', { name: /dashboard/ }));
//     expect(loginButton).toBeInTheDocument();
// })