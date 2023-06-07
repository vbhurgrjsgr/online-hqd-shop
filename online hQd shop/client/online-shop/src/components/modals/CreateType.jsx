import React from "react";
import { useState } from "react";
import { Modal,Button, Form} from "react-bootstrap";
import { createType } from "../../http/deviceAPI";

const CreateType = ({show, onHide}) => {
  const [value, setValue]  = useState('')
  const addType = () => {
    createType({name: value}).then(data => {
        setValue('')
        onHide()
    })
}
    return (
        <Modal
        show={show}
        onHide={onHide}

      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Добавить новы тип</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <Form>
                <Form.Control
                    value = {value}
                    onChange={e=> setValue(e.target.value)}
                    placeholder="добавить новы тип"
                />
            </Form>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Close</Button>
            <Button variant="outline-success" onClick={addType}>Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    )
}

export default CreateType