import React, {  } from "react";
import { useModalContext } from "./Hooks/modal.context";
import { Button } from 'antd';

const HomePage = () => {
    const { openModal } = useModalContext();

    const testModal = () => openModal({message: "Editar"})
    return(
        <>
        <h1>Home</h1>
        <Button onClick={testModal} type="primary">
            Abrir modal
        </Button>
        </>
    )
}

export default HomePage;