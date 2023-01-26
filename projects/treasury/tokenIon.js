const { sumTokens2 } = require("../helper/unwrapLPs");

// Receives rewards/fee from AMM wrapper via reward distributor on WETH shape, some are sold for LON...
const MULTISIG_ONE = "0x3557BD3d422300198719710Cc3f00194E1c20A46";

module.exports = {
  ethereum: {
    tvl: (_, block) => sumTokens2({ owner: MULTISIG_ONE, tokens: [
      '0xdac17f958d2ee523a2206206994597c13d831ec7',
      '0x55d31f68975e446a40a2d02ffa4b0e1bfb233c2f',
      '0x8E870D67F660D95d5be530380D0eC0bd388289E1', //USDP
      '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', //USDC
      '0x0000000000085d4780B73119b644AE5ecd22b376', //TUSD
      '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', //UNI
      '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', // WBTC
      '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0', // MATIC
      '0x4Fabb145d64652a948d72533023f6E7A623C7C53', // BUSD
      '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', // FEI
      '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
      '0xba100000625a3754423978a60c9317c58a424e3D', // BAL
      '0x4E15361FD6b4BB609Fa63C81A2be19d873717870', // FTM
      '0xdd974D5C2e2928deA5F71b9825b8b646686BD200', // KNC
      '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9', // AAVE
      '0xD533a949740bb3306d119CC777fa900bA034cd52', // CRV
      '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942', // MANA
      '0x514910771AF9Ca656af840dff83E8264EcF986CA', // LINK
      '0xc944E90C64B2c07662A292be6244BDf05Cda44a7', // GRT
      '0xc944E90C64B2c07662A292be6244BDf05Cda44a7', // UMA
      '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2', // SUSHI
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
      '0xE41d2489571d322189246DaFA5ebDe1F4699F498', // zRX
      '0x408e41876cCCDC0F92210600ef50372656052a38', // ren
      '0xc00e94Cb662C3520282E6f5717214004A7f26888', // COMP
      '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07', // OMG
      '0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919', // RAI
      '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD', // LRC

    ], block, }),
  },
};