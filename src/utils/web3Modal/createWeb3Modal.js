import Web3Modal from "web3modal";
import { providerOptions } from "./getNetworks";

export const createweb3Modal = new Web3Modal({
  network: "binance", // optional or "binance"
  cacheProvider: false, // optional
  providerOptions, // required
  disableInjectedProvider: false,
  theme: {
    background: "#000",
    main: "#fff",
    secondary: "#00c0d4",
    border: "#380033a8",
    hover: "#1C2833",
  },
  //providerOptions // required
});
