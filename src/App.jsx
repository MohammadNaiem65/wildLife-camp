import Header from './pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Shared/Footer/Footer';

function App() {
	return (
		<div className='relative'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
