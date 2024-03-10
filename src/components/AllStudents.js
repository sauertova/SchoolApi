import React, {useEffect, useState} from 'react'

const AllStudents = () => {
    const [students, setStudents] = useState(null);

    useEffect(() => {
        let fetchStudents = await () => {
            try{
                const {data} = await axios.get('http://localhost:1338/api/students');
                console.log{data};
            } catch (err) {
                console.error('error fetching students,' err);
            }
        };
    });

    return <div>In the AllStudents component</div>
};

export default AllStudents;