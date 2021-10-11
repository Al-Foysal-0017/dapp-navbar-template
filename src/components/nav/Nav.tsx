// import React from "react";
import { CurrentNetwork } from "../../utils/CurrentNetwork";
import { SortText } from "../../utils/SortText";

const Nav = ({
  connected,
  address,
  connectWallet,
  disconnectWallet,
  networkId,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>DAPP</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ margin: "0 10px" }}>
          {!address ? (
            <div>Network: Not Connected</div>
          ) : (
            <div>Network: {CurrentNetwork(networkId)}</div>
          )}
        </div>
        {address ? (
          <button onClick={connected ? disconnectWallet : connectWallet}>
            {SortText(address)}
          </button>
        ) : (
          <button onClick={connected ? disconnectWallet : connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
