import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Example(props) {
    const {toggle, isOpen}=props

    const save=()=>{

    }
    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>Service Details</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Cancel
                    </Button>{' '}
                    <Button color="secondary" onClick={save}>
                        Save changes
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Example;
