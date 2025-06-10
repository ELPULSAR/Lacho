
const connectWalletBtn = document.getElementById('connectWallet');
const BNB_PARAMS = {
  chainId: '0x38',
  chainName: 'BNB Smart Chain',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  rpcUrls: ['https://bsc-dataseed.binance.org/'],
  blockExplorerUrls: ['https://bscscan.com']
};

connectWalletBtn.addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const chainId = await ethereum.request({ method: 'eth_chainId' });

      if (chainId !== BNB_PARAMS.chainId) {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [BNB_PARAMS]
        });
      }

      connectWalletBtn.textContent = 'Conectado: ' + accounts[0].slice(0, 6) + '...';
    } catch (error) {
      alert('Error al conectar: ' + error.message);
    }
  } else {
    alert('MetaMask no está instalado.');
  }
});
