require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth place evil hover fork tail trust'; 
let testAccounts = [
"0xef7d430773fdc620b5686bb408b208476462d9bf2578118f508d5eede8d1c93b",
"0x3311757565e9d7bc03545dcd946722025fe0c158e65341cfad6003d7291fdef9",
"0x79c1f36001c6072cbcdff3471e4a858a4aa9b7405594493d446973285d0933ef",
"0xf36f2d098daa7d2eff8205188ff14ac8d74ab270c1fa5b2895284dfa73fd56d3",
"0x90db878a7c03648c4d7d570894fe4ba0fdee0c28f6826cc31a9df688f0710b7c",
"0x92207c62a0a919023775bf271382e3d816e2e364fb36d90f07e872cc60000818",
"0x6c5fa60785daaeca16bd194fb7d2a73556ede30ef1648c8780b8188eb039ee53",
"0x8a64975210fec9b2862f459d72c402f4546a933c05e8f7a21ad110b1f362e59c",
"0xf78105e8c9c9a7cef53d87399851da2f84552180468d16d888764fe9c0508eeb",
"0x7d42e32ca1f72ab127d98a19b23555d74ffe46982bad2db1c80a58e0dcc20f8e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


