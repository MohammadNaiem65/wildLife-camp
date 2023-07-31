import { createContext, useState } from 'react';

export const MetaContext = createContext({});

const MetaContextProvider = ({ children }) => {
	// ! States definition
	const [showNavbar, setShowNavbar] = useState(true);

	// * Module scaffolding
	const metaInfo = { showNavbar, setShowNavbar };

	return (
		<MetaContext.Provider value={metaInfo}>{children}</MetaContext.Provider>
	);
};

export default MetaContextProvider;
