import {
  Approval as ApprovalEvent,
  CurrencyOSSet as CurrencyOSSetEvent,
  RevokeGovernance as RevokeGovernanceEvent,
  Transfer as TransferEvent
} from "../generated/CJPY/CJPY"
import {
  Approval,
  CurrencyOSSet,
  RevokeGovernance,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCurrencyOSSet(event: CurrencyOSSetEvent): void {
  let entity = new CurrencyOSSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.currencyOSAddr = event.params.currencyOSAddr

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevokeGovernance(event: RevokeGovernanceEvent): void {
  let entity = new RevokeGovernance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._sender = event.params._sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
