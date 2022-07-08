import { Button, Input, Modal, Row, Text, Tooltip } from "@nextui-org/react";
import React from "react";

function Wallet() {
  const [visible, setVisible] = React.useState(false);

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const handleSendToken = () => {};
  return (
    <div className="container">
      <div className="card">
        <h1>My Wallet</h1>
        <img src="/my-wallet.webp" width="100%" />

        <p>
          <b> My Wallet Address: </b>
          <br />
          6yxvnXVKJdc4X6B8PPNCD9HnAAKjuYwkpQrZNnDN7zPB
        </p>

        <h2>0 SOL</h2>

        <Button shadow className="btn" size="lg" onClick={handler}>
          Send Token
        </Button>

        <Button color="success" shadow className="btn" size="lg">
          <Tooltip content={"You will receive 1 SOL in devnet"}>
            Airdrop Token
          </Tooltip>
        </Button>

        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <h4>Send Token</h4>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Receiver Address"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Amount in Lamports"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button auto onClick={handleSendToken}>
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Wallet;
