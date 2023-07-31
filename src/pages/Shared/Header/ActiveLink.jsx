import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({ children, to }) => {
	return (
		<NavLink
			className={`font-candal text-white px-2 relative link ${({ isActive }) =>
				isActive && 'active'}`}
			to={to}>
			{children}
		</NavLink>
	);
};

export default ActiveLink;
