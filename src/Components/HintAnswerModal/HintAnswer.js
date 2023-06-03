import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

function HintAnswer(props){
    function onClose(){
        props?.setHintPopupState(false);
    }

    return (
      <>
        <Modal isOpen={props?.isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Answer</ModalHeader>
            <ModalBody>
              { props?.level?.level_answer }
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' borderRadius={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default HintAnswer ;
