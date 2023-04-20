import { useState } from "react";

const Form = () => {
    const [course, setCourse] = useState('');
    const [invalidCourse, setInvalidCourse] = useState(false);

    const onCourseChange = (e) =>{
        setCourse(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        course === "" ? setInvalidCourse(true): setInvalidCourse(false);
    }

    return(
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <select name="" id="" onChange={onCourseChange}>
                        <option value="">--Select a course--</option>
                        <option value="Database">Database</option>
                        <option value="Fronted">Front-End Dev</option>
                        <option value="Backend">Back-End Dev</option>
                    </select>
                    {invalidCourse ? <p>Selected course isn't valid, please select a valid course</p> : ""}
                    <input type="number" min="0" max="10" step="0.1" placeholder="Student's grade" required/>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </>
    );
}

export default Form