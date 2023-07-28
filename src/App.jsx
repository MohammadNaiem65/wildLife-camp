import './App.css';
import Header from './pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Shared/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
