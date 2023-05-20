const validation = (userData) => {
    const errors = {};

    if (!userData.name) {
        errors.name = "Debe ingresar un nombre";
        //expresion regular para letras minusculas
    } else if (!/^[a-z]+$/.test(userData.name)) {
        errors.name = "Debe contener solo letras minúsculas";
    } else if (userData.name.length > 15) {
        errors.name = "No debe superar los 15 caracteres";
    }

    if (!userData.image) {
        errors.image = 'Debe contener una URL de una imagen';
    } else {
        //expresion regular para URL
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/; 
        if (!urlPattern.test(userData.image)) {
          errors.image = 'Debe ser una URL válida';
        }
    }
    //expresion regular para numeros
    if(!/^\d+$/.test(userData.life)){
        errors.life = 'Debe contener un valor numerico'
    }else if(userData.life.length > 3){
        errors.life = 'No debe superar los 3 caracteres'
    }

    if(!/^\d+$/.test(userData.stroke)){
        errors.stroke = 'Debe contener un valor numerico'
    } else if(userData.stroke.length > 3){
        errors.stroke = 'No debe superar los 3 caracteres'
    }

    if(!/^\d+$/.test(userData.defending)){
        errors.defending = 'Debe contener un valor numerico'
    } if(userData.defending.length > 3){
        errors.defending = 'No debe superar los 3 caracteres'
    }

    if(!/^\d+$/.test(userData.speed)){
        errors.speed = 'Debe contener un valor numerico'
    }else if(userData.speed.length > 3){
        errors.speed = 'No debe superar los 3 caracteres'
    }

    if(!/^\d+$/.test(userData.height)){
        errors.height = 'Debe contener un valor numerico'
    }else if(userData.height.length > 3){
        errors.height = 'No debe superar los 3 caracteres'
    }
    if(!/^\d+$/.test(userData.weight)){
        errors.weight = 'Debe contener un valor numerico'
    }else if(userData.weight.length > 3){
        errors.weight = 'No debe superar los 3 caracteres'
    }

    return errors;
}

export default validation;