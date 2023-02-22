import Btn from "@/components/Btn/Button";
import styles from './form.module.scss';
function Form () {

    function handleSubmit(e:any) {
        e.preventDefault()
    }

    return(
        <form className={styles.novaTarefa} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputContainer}>
                <label htmlFor="task">Adicione um novo estudo: </label>
                <input type="text" id="task" name="task" placeholder="O que você quer estudar?"/>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="time">Tempo: </label>
                <input type="time" id="time" step="1" name="time" min="00:00:00" max="01:30:00" required/>
            </div>
            <div> <Btn /> </div>

        </form>
    )
}

export default Form;