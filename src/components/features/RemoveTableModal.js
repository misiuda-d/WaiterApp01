import { Button, Modal } from "react-bootstrap";

export const RemoveTableModal = ({ onRemove, onCancel, ...props }) => {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Are you sure?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="my-0">
            This decision will completly remove this table from app. <br />
            After clicking Remove button, there is no way back! <br />
            Are you really sure?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
