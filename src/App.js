import './css/App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {lazy, Suspense, useState} from 'react';

const Header = lazy( () => import('./components/header-component') );
const Footer = lazy( () => import('./components/footer-component') );
const UnknownResource = lazy( () => import('./components/unknown-component') );
const Home = lazy(() => import('./components/home-component'));
const Login = lazy( () => import('./components/user/login-component') );
const Dashboard = lazy( () => import('./components/user/dashboard-component') );
const AdminLogin = lazy( () => import('./components/admin/admin-login-component') );
const AdminDashboard = lazy( () => import('./components/admin/admin-dashboard-component') );
const Contact = lazy( () => import('./components/contact-component') );
const Terms = lazy( () => import('./components/terms-component') );
const PrivacyPolicy = lazy( () => import('./components/privacy-policy-component') );

function App() {
const [isUserLoggedIn, setUserLoggedIn] = useState(false);
const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
const [userDetails, setUserDetails] = useState(null);

const updateUserLoggedIn = (booleanValue) => { setUserLoggedIn(booleanValue); };
const updateAdminLoggedIn = (booleanValue) => { setAdminLoggedIn(booleanValue); };
const updateUserDetails = (value) => { setUserDetails(value); };

return(<>
<Suspense fallback="Loading...">
<BrowserRouter>
<Header />
<main id="main-content" className="App-main">
<Routes>
<Route path="/" element={<Home />} exact />
<Route path="*" element={<UnknownResource />} />
<Route path="/login" element={<Login updateLoggedIn={updateUserLoggedIn} updateUserDetails={updateUserDetails} updateAdminLoggedIn={updateAdminLoggedIn} /> }/>
<Route path="/dashboard" element={
	(isUserLoggedIn ? <Dashboard user={userDetails} updateLoggedIn={updateUserLoggedIn} /> : <Navigate to="/login" />)
	} />
<Route path="/admin-login" element={<AdminLogin updateAdminLoggedIn={updateAdminLoggedIn} updateUserLoggedIn={updateUserLoggedIn} />} />
<Route path="/admin-dashboard" element={
	isAdminLoggedIn ? <AdminDashboard updateAdminLoggedIn={updateAdminLoggedIn} /> : <Navigate to="/admin-login" />
	} />
<Route path="/contact" element={<Contact />} />
<Route path="terms" element={<Terms />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
</Routes>
</main>
<Footer />
</BrowserRouter>
</Suspense>
</>);
}
export default App;

