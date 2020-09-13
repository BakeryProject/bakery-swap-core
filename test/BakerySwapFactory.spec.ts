import chai from 'chai'
import * as ethers from 'ethers'
import {AddressZero} from 'ethers/constants'
import {deployContract, solidity} from 'ethereum-waffle'

import BakerySwapFactory from '../build/BakerySwapFactory.json'

chai.use(solidity)

describe('BakerySwapFactory', () => {
  const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545')
  // const provider = ethers.getDefaultProvider('rinkeby')
  const privateKey = ''
  const wallet = new ethers.Wallet(privateKey, provider)
  const overrides = {
    gasLimit: 9999999,
    gasPrice: 390000000000
  }

  it('deploy', async () => {
    console.log(`start deployContract swapFactory`)
    const swapFactory = await deployContract(
      wallet,
      BakerySwapFactory,
      ['0xf9e89b5aCA2e6061d22EA98CBCc2d826E3f9E4b1'],
      overrides
    )
    console.log(`contract swapFactory address ${swapFactory.address}`)
    console.log(`contract swapFactory deploy transaction hash ${swapFactory.deployTransaction.hash}`)
    await swapFactory.deployed()
    console.log(`finish deployContract swapFatory`)
    /**
     * contract swapFactory address 0x9303c500e327D08257514FEB7cec90e1aBc757B1
     * contract swapFactory deploy transaction hash 0x211f40d4dda0eb8a121cfdda08494bec303a90945479adb23caf6939c47d9dcc
     */
    /**
     * 20200901
     * contract swapFactory address 0x63b231323F0d207a9a649A328d10514619FDDCC9
     * contract swapFactory deploy transaction hash 0xd6f2c15183944decf8a041d1399f538dcea2e715d3d034be5f1e0472f8f18330
     *
     * 0x80fc24CE272C5f1f063dA9715CfEC5B5dD7dcBF2
     * 0x0459cae24f5f6911b79134a849db1ae9ac78953cce46bb16585db99bb51efa7b
     */
    /**
     * 20200902
     * contract swapFactory address 0xfb2bfD8db30865A1619A0E6eCa807a100917c563
     * contract swapFactory deploy transaction hash 0x229dcdfe923e1c0f767b163612002ea8d05d17ad500e8530f38fa6ff4bdf8f40
     */
    /**
     *
     * 20200904 bsc test net
     * contract swapFactory address 0x54f36A35889717214eee4931d0367d78308c8b13
     * contract swapFactory deploy transaction hash 0x9ca0cc61a85540d4c6d2563161a421f1883a8f2d850730a3bd2e859722d2e523
     */
    /**
     *
     * 202009010 bsc test net
     * contract swapFactory address 0x9A0615b24C8064F26A3030507c2B5f0DB7F975b4
     * contract swapFactory deploy transaction hash 0x55adfd1c40513a8317ad748362962e1a52b7ec5cd0173c7bd5bf39cd962ce43b
     */
  })
})
