import { useState } from "react";
import axios from 'axios';
import style from './Form.module.css';
import validation from "./validation";
const URL = 'https://pokemons.up.railway.app/pokemons/';

const Form = () => {

    // crea un estado para el formulario y setForm permite modificar cada campo sin que se actualice todo
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        name: "",
        image: "",
        life: "",
        stroke: "",
        defending: "",
        speed: "",
        height: "",
        weight: "",
        typeId: [],
    });
    
      
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        // validation recibe como argumento un objeto que contiene una copia del estado form actualizado con la nueva propiedad [property] y su correspondiente valor value
        const validationErrors = validation({ ...form, [property]: value });
      
        setForm({ ...form, [property]: value });
        // actualiza el estado errors al agregar o reemplazar el error específico de la propiedad que se modificó en el formulario con su nuevo valor de error obtenido de validationErrors.
        setErrors({ ...errors, [property]: validationErrors[property] });
    };
    

    const checkboxChangeHandler = (event) => {
        const id = event.target.value;
        const isChecked = event.target.checked; //devuelve un valor booleano
        let newTypeIds = form.typeId.slice();   // crea una copia del arreglo

        if (isChecked) {
            newTypeIds.push(id);
        } else {
            newTypeIds = newTypeIds.filter(typeId => typeId !== id); //si desmarca la casilla la borramos del new arr
        }
        setForm({...form, typeId: newTypeIds});//actualiza el estado de typeId
    }


    const submitHandler = (event) => {
        event.preventDefault() //se utiliza comúnmente en el controlador del evento de envío (submit) para prevenir la acción predeterminada de enviar el formulario y recargar la página.
        axios.post(`${URL}`, form)
        .then(res => {
            alert('-- El Pokémon se creó exitosamente! 🤩')
            window.location.href = "/home";
        })
        .catch(error => {
            console.log(error)
            alert('-- Hubo un error al crear el Pokémon 😖')
        })
    }


    return (
        <form onSubmit={submitHandler} className={style.form}>
            <div className={style.specialInput}>
                <label className={style.specialInputLabel}> NAME  </label>
                <input type="text" placeholder="Enter the Name" pattern="[a-z]*" className={style.specialInputField} value={form.name} onChange={changeHandler} name="name"/> 
                {errors.name && <p className={style.errors}>{errors.name}</p>}
            </div> 

            <div className={style.specialInput}>
                <label className={style.specialInputLabel}> IMAGE </label>
                <input type="text" placeholder="Paste the image Link" className={style.specialInputField} value={form.image} onChange={changeHandler} name="image" />
                {errors.image && <p className={style.errors}>{errors.image}</p>}
            </div>

            <div className={style.specialInput}>
                <label className={style.specialInputLabel} > LIFE </label>
                <input type="number"  className={style.specialInputField} value={form.life} onChange={changeHandler} name="life" /> 
                {errors.life && <p className={style.errors}>{errors.life}</p>}
            </div>

            <div className={style.specialInput}>
                <label className={style.specialInputLabel} > STROKE </label>
                <input type="number" className={style.specialInputField} value={form.stroke} onChange={changeHandler} name="stroke" />
                {errors.stroke && <p className={style.errors}>{errors.stroke}</p>}
            </div>

            <div className={style.specialInput}>
                <label className={style.specialInputLabel} > DEFENDING </label>
                <input type="number" className={style.specialInputField} value={form.defending} onChange={changeHandler} name="defending"/>
                {errors.defending && <p className={style.errors}>{errors.defending}</p>}
            </div>

            <div className={style.specialInput}>
                <label className={style.specialInputLabel} > SPEED </label>
                <input type="number" className={style.specialInputField} value={form.speed} onChange={changeHandler} name="speed"/>
                {errors.speed && <p className={style.errors}>{errors.speed}</p>}
            </div>

            <div className={style.specialInput}>
                <label className={style.specialInputLabel} > HEIGHT </label>
                <input type="number" className={style.specialInputField} value={form.height} onChange={changeHandler} name="height"/>
                {errors.height && <p className={style.errors}>{errors.height}</p>}
            </div>

            <div className={style.specialInput}>
                <label className={style.specialInputLabel} > WEIGHT </label>
                <input type="number" className={style.specialInputField} value={form.weight} onChange={changeHandler} name="weight"/>
                {errors.weight && <p className={style.errors}>{errors.weight}</p>}
            </div>



            <div className={style.container}>

                <label className={style.containerInput}> TYPE OF POKEMON  </label>
                <div>
                    <label>
                        <input type="checkbox" value="1" checked={form.typeId.includes("1")} onChange={checkboxChangeHandler}/>
                        <span> NORMAL </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="2" checked={form.typeId.includes("2")} onChange={checkboxChangeHandler}/>
                        <span> FIGHTING </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="3" checked={form.typeId.includes("3")} onChange={checkboxChangeHandler}/>
                        <span> FLYING </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="4" checked={form.typeId.includes("4")} onChange={checkboxChangeHandler}/>
                        <span> POISON </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="5" checked={form.typeId.includes("5")} onChange={checkboxChangeHandler}/>
                        <span> GROUND </span>
                    </label>
                </div>

                <div>
                    <label>
                    <input type="checkbox" value="6" checked={form.typeId.includes("6")} onChange={checkboxChangeHandler}/>
                    <span> ROCK </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="7" checked={form.typeId.includes("7")} onChange={checkboxChangeHandler}/>
                        <span> BUG </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="8" checked={form.typeId.includes("8")} onChange={checkboxChangeHandler}/>
                        <span> GHOST </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="9" checked={form.typeId.includes("9")} onChange={checkboxChangeHandler}/>
                        <span> STEEL </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="10" checked={form.typeId.includes("10")} onChange={checkboxChangeHandler}/>
                        <span> FIRE </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="11" checked={form.typeId.includes("11")} onChange={checkboxChangeHandler}/>
                        <span> WATER </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="12" checked={form.typeId.includes("12")} onChange={checkboxChangeHandler}/>
                        <span> GRASS </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="13" checked={form.typeId.includes("13")} onChange={checkboxChangeHandler}/>
                        <span> ELECTRIC </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="14" checked={form.typeId.includes("14")} onChange={checkboxChangeHandler}/>
                        <span> PSYCHIC </span>
                    </label>
                </div>
                
                <div>
                    <label>
                        <input type="checkbox" value="15" checked={form.typeId.includes("15")} onChange={checkboxChangeHandler}/>
                        <span> ICE </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="16" checked={form.typeId.includes("16")} onChange={checkboxChangeHandler}/>
                        <span> DRAGON </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="17" checked={form.typeId.includes("17")} onChange={checkboxChangeHandler}/>
                        <span> DARK </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="18" checked={form.typeId.includes("18")} onChange={checkboxChangeHandler}/>
                        <span> FAIRY </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="19" checked={form.typeId.includes("19")} onChange={checkboxChangeHandler}/>
                        <span> UNKNOWN </span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="checkbox" value="20" checked={form.typeId.includes("20")} onChange={checkboxChangeHandler}/>
                        <span> SHADOW </span>
                    </label>
                </div>

            </div>


            <button type="submit"> CREATE YOUR POKEMON ! </button>
        </form>
    );
}

export default Form;
