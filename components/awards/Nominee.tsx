import classNames from 'classnames';

import { BallotItemInterface } from "@pages/awards";
import styles from "@styles/awards/Nominee.module.css";

interface NomineeProps {
    item: BallotItemInterface,
    onSelect: Function
}

const Nominee = (props: NomineeProps) => {
    const item = props.item;

    return (
        <div className={ styles.nominee }>
            <div className="row">
                <h3 className="text-center">{ item.title }</h3>
            </div>
            <div className="row">
                <div className="col justify-content-center">
                    <img className={ styles['nominee-img'] } src={ item.photoUrL } />
                </div>
            </div>
            <div className="row">
                <div className="col justify-content-center">
                    <button className={ classNames({ btn: true }) } onClick={ props.onSelect(item.id) }>Select</button>
                </div>
            </div>
        </div>
    )
}

export default Nominee;