import React, { useState, useEffect, useCallback } from "react";
import Nav from "./components/nav/Nav";
import { createweb3Modal } from "./utils/web3Modal/createWeb3Modal";
import { useConnectWallet, useDisconnectWallet } from "./utils/web3Modal/hooks";

const App = () => {
  const {
    connectWallet,
    web3,
    address,
    networkId,
    connected,
  } = useConnectWallet();
  const { disconnectWallet } = useDisconnectWallet();
  const [web3Modal, setModal] = useState(null);
  console.log("networkId:>>>", networkId);

  useEffect(() => {
    setModal(createweb3Modal);
  }, [setModal]);

  useEffect(() => {
    if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
      connectWallet(web3Modal);
    }
  }, [web3Modal, connectWallet]);

  const connectWalletCallback = useCallback(() => {
    connectWallet(web3Modal);
  }, [web3Modal, connectWallet]);

  const disconnectWalletCallback = useCallback(() => {
    disconnectWallet(web3, web3Modal);
  }, [web3, web3Modal, disconnectWallet]);
  return (
    <div>
      <Nav
        address={address}
        connected={connected}
        connectWallet={connectWalletCallback}
        disconnectWallet={disconnectWalletCallback}
        networkId={networkId}
      />
    </div>
  );
};

export default App;
