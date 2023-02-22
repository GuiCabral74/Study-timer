import style from './list.module.scss';
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
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia:</h2>
            <ul>
                {courses.map((e, index) => {
                    return (
                        <li key={index} className={style.item}>
                            <h3>{e.course}</h3>
                            <span>{e.time}</span>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}