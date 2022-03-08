import type { NextComponentType } from 'next'
import styles from "@styles/awards/Nominee.module.css";

const Nominee: NextComponentType = () => {
    return (
        <div className={ styles.nominee }>
            <div className="row">
                <h3 className="text-center">Nominee</h3>
            </div>
            <div className="row">
                <div className="col justify-content-center">
                    <img className={ styles['nominee-img'] } src="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col justify-content-center">
                    <button className={ styles['nominee-select'] }>Select</button>
                </div>
            </div>
        </div>
    )
}

export default Nominee;