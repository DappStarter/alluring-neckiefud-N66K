require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember smile gloom forget flock snap'; 
let testAccounts = [
"0x4412650e899d428ae673aa9f4cef409d43f30bc18de3114eb70208ce336fc902",
"0xffe202e9f583277a07f8af7d5ac1da91c4d97fecbd10f7ab9fa28436fa9ea0a2",
"0x9336958b91cdbab7eb3fbc9b563200e0677a1f72eb15a71d46676e5f2daa22e4",
"0xd3a155bcc7269d6c48dc0e5029a58e87a66fad6776cd1e7965adb79530106544",
"0x2ddf7be49bfbe570167a78742671eebffcf40ce79d3cd23ac9e79161e98823bd",
"0xf1611423f3a5ceb5a2ddfde835edce7c799a06d382797f8c897dfa1d752a9b82",
"0xb86fd2b522f8aec19222abfcb2ec2df0a3c0c519cb8358941f9b0f4668fb1afc",
"0x4e63b518e1f0166a986c0174fedad48266259938cc6d091cb474b46bc8dcaf2c",
"0x0ea19f20928c4a4d7daecfcbfb3215981742ec1d55357208268a70b19d6f6f18",
"0xcd2eeb0fbf53800ade7694cf9fa4d9db0be27936975f4a4e2fb028ca6c631685"
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


