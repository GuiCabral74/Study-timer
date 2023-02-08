import Btn from "@/components/Btn/Button";

function Form () {

    function handleSubmit(e:any) {
        e.preventDefault()
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label htmlFor="task">Adicione um novo estudo: </label>
                <input type="text" id="task" name="task" placeholder="O que você quer estudar?"/>
            </div>
            <div>
                <label htmlFor="time">Tempo: </label>
                <input type="time" id="time" step="1" name="time" min="00:00:00" max="01:30:00" required/>
            </div>
            <div> <Btn /> </div>

        </form>
    )
}

export default Form;