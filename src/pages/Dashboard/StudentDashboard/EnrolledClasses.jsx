import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthContextProvider/AuthContextProvider';

const EnrolledClasses = () => {
	// ! Variable definitions
	const { user } = useContext(AuthContext);
	const [enrolledClasses, setEnrolledClasses] = useState([]);

	// ! Get selected classes
	useEffect(() => {
		fetch(
			`http://localhost:5000/student/classes/selected?email=${user.email}`
		)
			.then((res) => res.json())
			.then((data) => setEnrolledClasses(data));
	}, []);

	console.log(enrolledClasses);

	return <div>enrolled classes: {enrolledClasses.length}
    </div>;
};

export default EnrolledClasses;
