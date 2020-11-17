// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.5.3;

import '@gnosis.pm/safe-contracts/contracts/proxies/IProxyCreationCallback.sol';

contract SafeBatchCreate {
  event safeCreate(address safe, address owner);

  function batchCreate(address owner) public {
      emit safeCreate(address(0x0), owner);
  }
}
