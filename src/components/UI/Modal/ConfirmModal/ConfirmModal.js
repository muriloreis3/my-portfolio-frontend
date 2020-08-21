import React from 'react'

import Modal from "../modal";

export default function ConfirmModal(props) {

    const confirm = () => {
        props.confirm();
        props.modalClose();
    }

    return (
        <Modal show={props.show} modalClose={props.modalClose}>
            <div>
                {props.children}
                <div>
                    <button onClick={confirm}>Yes</button>
                    <button onClick={props.modalClose}>No</button>
                </div>
            </div>
        </Modal>
    )
}
