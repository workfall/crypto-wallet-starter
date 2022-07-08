import { Button, Textarea } from "@nextui-org/react";
import React from "react";

function ImportWallet() {
  return (
    <div className="container">
      <div className="card">
        <h1>Import Wallet</h1>
        <img src="/create-wallet.webp" width="100%" />

        <Textarea
          width="100%"
          label=""
          placeholder="Enter your secret phrase here..."
        />

        <Button color="success" shadow className="btn" size="lg">
          Import my wallet
        </Button>
      </div>
    </div>
  );
}

export default ImportWallet;
