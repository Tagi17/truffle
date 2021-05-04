compilers: {
    solc: {
       version: ">=0.6.0 < 0.8.3",   
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
      //  evmVersion: "byzantium"
      // }
    }
  },

  db: {
    enabled: false
  }
};