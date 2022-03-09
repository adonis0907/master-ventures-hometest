import classNames from 'classnames';

import { BallotItemInterface } from "@pages/awards";
import styles from "@styles/awards/Nominee.module.css";

interface NomineeProps {
    item: BallotItemInterface,
    onSelect: Function,
    active: Boolean
}

const Nominee = (props: NomineeProps) => {
    const item = props.item;

    return (
        <div className={`${ styles.nominee } ${ props.active && styles.active }`}>
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
                    <button aria-label='select-nominee' className={ classNames({ btn: true }) } onClick={ props.onSelect(item.id, !props.active) }>
                        { props.active ? 'Unselect' : 'Select'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nominee;