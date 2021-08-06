// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.0;

import { GnosisSafe } from '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol';
import { GnosisSafeProxy } from '@gnosis.pm/safe-contracts/contracts/proxies/GnosisSafeProxy.sol';
import { GnosisSafeProxyFactory } from '@gnosis.pm/safe-contracts/contracts/proxies/GnosisSafeProxyFactory.sol';

contract SafeBatchCreate {
  event ProxyCreation(GnosisSafeProxy proxy);

  GnosisSafeProxyFactory public constant proxyFactory = GnosisSafeProxyFactory(0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B);

  function batchCreate(address masterCopy, address owner, uint numSafes) public {
    address[] memory owners = new address[](1);
    owners[0] = owner;
    bytes memory setupData = abi.encodeWithSelector(
      GnosisSafe.setup.selector,
      owners, // address[] calldata _owners,
      uint256(1), // uint256 _threshold,
      address(0), // address to,
      "", // bytes calldata data,
      address(0xd5D82B6aDDc9027B22dCA772Aa68D5d74cdBdF44), // address fallbackHandler,
      address(0), // address paymentToken,
      uint256(0), // uint256 payment,
      address(0) // address payable paymentReceiver
    );

    for (uint i = 0; i < numSafes; i++) {
      proxyFactory.createProxy(masterCopy, setupData);
    }
  }
}
