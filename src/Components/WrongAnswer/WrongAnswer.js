import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

function WrongAnswer(props){
    function onClose(){
        props?.setAnswerPopupState(false);
    }

    return (
      <>
        <Modal isOpen={props?.isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Result</ModalHeader>
            <ModalBody>
              Wrong Answer
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' borderRadius={3} onClick={onClose}>
                Try Again
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default WrongAnswer ;
