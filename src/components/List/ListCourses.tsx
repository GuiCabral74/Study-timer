export default function ListCourses () {

const courses = [
    {
        course:'React',
        time:'02:00:00'
    },
    {
        course:'TypeScript',
        time:'03:00:00'
    }];

    return (
        <>
            <h2>Estudos do dia:</h2>
            <ul>
                {courses.map((e, index) => {
                    return (
                        <li key={index}>
                            <h3>{e.course}</h3>
                            <span>{e.time}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}