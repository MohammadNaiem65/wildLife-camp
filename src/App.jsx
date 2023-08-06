import Header from './pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Shared/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from './Providers/AuthContextProvider/AuthContextProvider';
import loadingImg from './assets/loading.gif';

function App() {
	const { loading } = useContext(AuthContext);
	return (
		<div className='h-screen relative flex flex-col justify-between'>
			<Header />
			<Outlet />
			<Footer />
			<img
				className={`w-48 aspect-square fixed z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
					loading ? 'block' : 'hidden'
				}`}
				src={loadingImg}
				alt='loading image'
			/>
		</div>
	);
}

export default App;
