import car from '../../assets/Car.png'
import styles from './style.module.css'

export default function Container() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>MERCEDES-AMG.</h2>
                <p>The AMG performance
                    vehicle of the CLA.</p>

            </div>

            <div>
                <img src={car} alt="" className={styles.img}/>
            </div>

            <div className={styles.describe}>
                <p>The facelift once again <br/> clearly underlines its <br/> dynamic appearance. </p>
                <p>The AMG radiator grille with double lamella and <br/> the characteristic AMG front skirt in A-Wing <br/> design characterise the striking front.....</p>
            </div>
        </div>


    )


}