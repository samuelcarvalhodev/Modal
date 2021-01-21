import React, {  } from "react";
import { Input, Modal as ModalComponent } from "antd";

import { useModalContext } from "./Hooks/modal.context";

const Modal = () => {
    const { modalState: {message, visible}, closeModal } = useModalContext();

    return(

        <ModalComponent  onCancel={closeModal} onOk={closeModal} visible={visible}>
            <span>email</span>
            <Input type="text"/>
            <span>senha</span>
            <Input type="text"/>
        </ModalComponent>

    );
}

export default Modal;