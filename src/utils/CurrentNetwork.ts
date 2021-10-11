export function CurrentNetwork(networkID: number) {
  if (networkID === 1) return "MainNet";
  else if (networkID === 3) return "Ropsten";
  else if (networkID === 42) return "Kovan";
  else if (networkID === 4) return "Rinkeyby";
  else if (networkID === 5) return "Goerli";
  else if (networkID === 97) return "Binance Test";
  else if (networkID === 56) return "Binance";
  else return "Wrong Network";
}
