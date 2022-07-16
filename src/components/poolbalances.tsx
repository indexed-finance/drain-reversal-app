import { formatEther } from 'ethers/lib/utils';
import { useMemo } from 'react';
import { CC10, DEFI5, FFF, TOKEN_SYMBOLS, UNISWAP_PAIRS } from '../config';
import { useRedeemableAmounts, useRedeemActions, useUniBurnAllowance } from '../hooks/pools';
import { TokenAmounts, TokenElement } from '../types';

import Button from '../elements/button'

type Props = TokenAmounts & {
    isPair?: boolean;
    poolName?: string;
    address: string;
    account: string;
    shouldRedeem: boolean;
}

function PoolTokenAmounts({
    account,
    pairAmount,
    poolAmount,
    ethAmount,
    stakedAmount,
    tokens,
    amounts,
    isPair,
    shouldRedeem,
    poolName,
    address
}: Props) {
    const totalBalance = isPair ? pairAmount : poolAmount;

    const balance = useMemo(() => {
      return totalBalance.sub(stakedAmount)
    }, [stakedAmount, totalBalance]);

    const { unstake, redeem, approveUniBurn } = useRedeemActions({
      account,
      token: address,
      isPair,
      stakedAmount,
      totalBalance
    })

    const allowance = useUniBurnAllowance(account, address)

    const mustApprove = useMemo(() => {
      return isPair && allowance.data && allowance.data.lt(totalBalance)
    }, [isPair, allowance, totalBalance])

    //if (totalBalance.eq(0)) return null;

    if (unstake.isError) {
      console.log(unstake.error)
    }

    if (redeem.isError) {
      console.log(redeem.error)
    }

    return (
      <div className='table-column'>
        <h3> {poolName} </h3>
        <h4>{formatEther(totalBalance)}</h4>
        <h5>{formatEther(balance)}</h5>
        <h5>{formatEther(stakedAmount)}</h5>
        {!shouldRedeem && (
          <Button
            disabled={unstake.isLoading}
            onClick={() => unstake.write()}
            className='table-btn'
          >
            Withdraw
          </Button>
        )}
        {shouldRedeem && (
          <Button
            disabled={approveUniBurn.isLoading}
            onClick={() => approveUniBurn.write()}
            className='table-btn'
            secondary
          >
            {mustApprove ? 'Approve' : 'Redeem'}
          </Button>
        )}
        <br /> <br />
        {tokens.map((token, index) => (<div>
            <b>{TOKEN_SYMBOLS[token]}</b>: {formatEther(amounts[index])}
        </div>))}
      </div>
    )
}

function TableHeaders() {
  return (
    <div className='table-column'>
      <h3> &nbsp; </h3>
      <h5 className='text-alt'> TOTAL</h5>
      <h5 className='text-alt'> WALLET </h5>
      <h5 className='text-alt'> STAKED</h5>
      <br/><br/>
      <h5 className='text-alt'> REDEEMABLE</h5>
    </div>
  )
}

export default function PoolBalances({ address, redeem }: { address: string, redeem: boolean }) {
    const { data, isError, isLoading, error } = useRedeemableAmounts(address);

    if (!data) {
        return <h1>No data?</h1>
    }

    return (
      <div className='pool-redemptions'>
        <TableHeaders/>
          {[ DEFI5, CC10, FFF, ...Object.values(UNISWAP_PAIRS) ]
            .map((tokenAddress: string) => (
              <PoolTokenAmounts
                shouldRedeem={redeem}
                {
                  ...data[tokenAddress as keyof TokenElement]
                }
                isPair={
                  Object.values(UNISWAP_PAIRS)
                  .indexOf(tokenAddress) !== -1
                }
                poolName={TOKEN_SYMBOLS[tokenAddress]}
                address={tokenAddress}
                account={address}
              />
            )
          )}
      </div>
    )
}
