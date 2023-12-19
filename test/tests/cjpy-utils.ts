import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  CurrencyOSSet,
  RevokeGovernance,
  Transfer
} from "../generated/CJPY/CJPY"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createCurrencyOSSetEvent(
  currencyOSAddr: Address
): CurrencyOSSet {
  let currencyOsSetEvent = changetype<CurrencyOSSet>(newMockEvent())

  currencyOsSetEvent.parameters = new Array()

  currencyOsSetEvent.parameters.push(
    new ethereum.EventParam(
      "currencyOSAddr",
      ethereum.Value.fromAddress(currencyOSAddr)
    )
  )

  return currencyOsSetEvent
}

export function createRevokeGovernanceEvent(
  _sender: Address
): RevokeGovernance {
  let revokeGovernanceEvent = changetype<RevokeGovernance>(newMockEvent())

  revokeGovernanceEvent.parameters = new Array()

  revokeGovernanceEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )

  return revokeGovernanceEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
