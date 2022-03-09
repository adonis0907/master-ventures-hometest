import { FC, SyntheticEvent, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { RootState } from "@store/index"
import { AwardedBallotInterface } from "@pages/awards"
import styles from '@styles/awards/ResultModal.module.css'

interface ResultModalProps {
    open: Boolean,  
    onClose: Function
}

const Modal = styled.div`
    position: relative;
    background-color: white;
    color: #555;
    width: 800px;
    height: 500px;
    border-radius: 4px;
    border: 1px solid #222;
    transition: opacity .25s;
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 3rem;
`;

const ModalBody = styled.div`
    height: auto;
`;

const ResultModal: FC<any> = (props: ResultModalProps) => {
    const modalPageRef = useRef<HTMLDivElement>(null);
    const isOpen = props.open;
    const awardedBallots = useSelector((state: RootState) => state.award.items);

    const onDrop = (e: SyntheticEvent) => {
        e.stopPropagation();
        props.onClose();
    }

    useEffect(() => {
        if (props.open) {
            if (modalPageRef && modalPageRef.current)
                modalPageRef.current.style.backgroundColor = '#333A';
        } else {
            if (modalPageRef && modalPageRef.current)
                modalPageRef.current.style.backgroundColor = '#3330';
        }

    }, [props.open]);

    return (
    isOpen &&
        <div className={ styles['modal-page'] } onClick={onDrop} ref={ modalPageRef }>
            <Modal onClick={(e: SyntheticEvent) => e.stopPropagation()}>
                <ModalHeader>
                    <button className={ `${styles['close']}` } onClick={onDrop}>&times;</button>
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center text-uppercase">{ awardedBallots.length ? "success" : "No selected items!" }</h2>
                        </div>
                        <div className="row">
                            {
                                awardedBallots.map((ballot: AwardedBallotInterface, index: number) =>
                                    <p key={ index }>
                                        <strong>{ ballot.title }</strong> : { ballot.selected }
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ResultModal;