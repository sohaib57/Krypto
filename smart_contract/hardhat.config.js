require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Pg2qlVmLIfr4-Imh7skCJq_lSwBn8mkn',
      accounts: ['818f4d5add6240a61ad105c12a39d91e7e81427d9a4e3a1c2fdbf6f75e541458'],
    },
  },
};