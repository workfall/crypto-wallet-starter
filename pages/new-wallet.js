import { Button, Textarea } from "@nextui-org/react";
import React from "react";

function NewWallet() {
  return (
    <div className="container">
      <div className="card">
        <h1>Create New Wallet</h1>
        <img src="/create-wallet.webp" width="100%" />

        <p>
          Generate new key phrase, for my Solana Wallet. Keep this phrase secret
          and safe. It's like your user ID and password both.
        </p>

        <div className="box">My secret phrase goes here</div>

        <Button color="success" shadow className="btn" size="lg">
          Generate new KEY
        </Button>
      </div>
    </div>
  );
}

export default NewWallet;
