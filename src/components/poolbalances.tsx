import { useMemo, Fragment } from 'react';

import { useTheme } from 'styled-components'
import { formatEther } from 'ethers/lib/utils';
import {
  useRedeemableAmounts, useRedeemActions, useUniBurnAllowance
} from '../hooks/pools';

import { TokenAmounts, TokenElement } from '../types';

import { CC10, DEFI5, FFF, TOKEN_SYMBOLS, UNISWAP_PAIRS } from '../config';

import Button from '../elements/button'

type Props = TokenAmounts & {
    isPair?: boolean;
    poolName?: string;
    address: string;
    account: string;
    shouldRedeem: boolean;
    isMobile: boolean;
}

interface PoolProps {
  address: string;
  redeem: boolean;
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
    address,
    isMobile
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

    if (!!account && unstake.isError) {
      alert(unstake.error)
    }

    if (!!account && redeem.isError) {
      console.log(redeem.error)
    }

    return (
      <div className='table-column'>
        <h3> {poolName} </h3>
        <h4>{isMobile ? 'TOTAL: ' : ''}{formatEther(totalBalance)}</h4>
        <h5>{isMobile ? 'WALLET: ' : ''}{formatEther(balance)}</h5>
        <h5>{isMobile ? 'STAKED: ' : ''}{formatEther(stakedAmount)}</h5>
        {shouldRedeem && (
          <Button
            className='table-btn'
            disabled={
              approveUniBurn.isLoading || balance.eq(0)
            }
            onClick={() =>  mustApprove ?
              approveUniBurn.write() :
              redeem.write()
            }
            secondary
          >
            {mustApprove ? 'Approve' : 'Redeem'}
          </Button>
        )}
        {!shouldRedeem && (
          <Button
            className='table-btn'
            disabled={
              unstake.isLoading || stakedAmount.eq(0)
            }
            onClick={() => unstake.write()}
          >
            Withdraw
          </Button>
        )}
        <br /> <br />
        {isMobile && (
          <h3 className='text-alt'> REDEEMABLE FOR </h3>
        )}
        {tokens.map((token, index) => (
          <div>
            <b>{TOKEN_SYMBOLS[token]}</b>:
            &nbsp;{formatEther(amounts[index])}
          </div>
        ))}
      </div>
    )
}

function TableHeaders({ isMobile }: { isMobile: boolean }) {
  if(!isMobile) {
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
  } else return <Fragment />
}

export default function PoolBalances({ address, redeem }: PoolProps) {
  const { data } = useRedeemableAmounts(address);
  const theme = useTheme()

  if (data) {
    return (
      <div className='pool-redemptions'>
        <TableHeaders isMobile={theme.mobile} />
          {[ DEFI5, CC10, FFF, ...Object.values(UNISWAP_PAIRS) ]
            .map((tokenAddress: string) => (
              <PoolTokenAmounts
                shouldRedeem={redeem}
                { ...data[tokenAddress as keyof TokenElement] }
                isPair={
                  Object.values(UNISWAP_PAIRS)
                  .indexOf(tokenAddress) !== -1
                }
                poolName={TOKEN_SYMBOLS[tokenAddress]}
                isMobile={theme.mobile}
                address={tokenAddress}
                account={address}
              />
            )
          )}
      </div>
    )
  } else return <Fragment />
}
