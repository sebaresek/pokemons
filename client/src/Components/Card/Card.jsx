import style from './Card.module.css';
// import { useRef } from "react";
import { Link } from 'react-router-dom';



const  Card = (props) => {
    
    // const audioRef = useRef(null);
    function handleMouse() {
    //    audioRef.current.currentTime = 0;
    //    audioRef.current.play();
    console.log('mouse entered')
    }
    //  onMouseEnter={handleMouse}


    return (
        <div className={style.card}  onMouseEnter={handleMouse} >
            <div className={style.font}>
                <img src={props.image} alt={props.name} />
            </div>

            <div className={style.back} >
                <div>
                    <Link to={`/detail/${props.id}`} className={style.link}>
                        <h2 className={style.name}>{props.name}</h2>
                    </Link>
                </div>

                <div className={style.type}>
                    <h2>Type: {props.types ? props.types : props.typess}</h2>
                </div>


                <div >            
                    <button onClick={() => props.onClose(props.id)}>X</button>
                </div>


                {/* <audio ref={audioRef}> */}
                    {/* <source src={process.env.PUBLIC_URL + '/pop.mp3'} type="audio/mpeg" /> */}
                {/* </audio> */}

            </div>

        </div>
    );
};

export default Card;