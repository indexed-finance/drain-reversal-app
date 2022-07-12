import { formatEther } from 'ethers/lib/utils';
import { useMemo } from 'react';
import { CC10, DEFI5, FFF, TOKEN_SYMBOLS, UNISWAP_PAIRS } from '../config';
import { useRedeemableAmounts, useRedeemActions, useUniBurnAllowance } from '../hooks/pools';
import { TokenAmounts } from '../types';

type Props = TokenAmounts & {
    isPair?: boolean;
    poolName?: string;
    address: string;
    account: string;
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
    poolName,
    address
}: Props) {
    const name = `${poolName}${isPair ? "-ETH" : ""}`;
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

    if (totalBalance.eq(0)) return null;

    if (unstake.isError) {
      console.log(unstake.error)
    }

    if (redeem.isError) {
      console.log(redeem.error)
    }

    return <div className='PoolData'>
        {
          balance.gt(0) && stakedAmount.gt(0) && <h3>Total {name}: {formatEther(totalBalance)}</h3>
        }

        {balance.gt(0) && <h4>{name} Balance: {formatEther(balance)}</h4>}

        {stakedAmount.gt(0) && <div className='StakedAmounts'>
          <h4>Staked {name}: {formatEther(stakedAmount)}</h4>
          <h5>Unstake tokens to redeem underlying assets</h5>
          <button disabled={unstake.isLoading} onClick={() => unstake.write()}>Withdraw staked tokens</button>
          { unstake.isLoading && <p>Withdrawing staked tokens...</p> }
          { unstake.isError && <p>Error withdrawing staked tokens (check console)</p> }
        </div>}

        <div className='UnderlyingAmounts'>
          {
            isPair && <div>
              <h4>Redeemable Underlying Assets For {formatEther(totalBalance)} {name}</h4>
              <div><b>ETH</b>: {formatEther(ethAmount)}</div>
              <div><b>{poolName}</b>: {formatEther(poolAmount)}</div>
            </div>
          }
          <h4>Redeemable Underlying Assets { stakedAmount.gt(0) && balance.gt(0) ? `For ${formatEther(poolAmount)} ${poolName}` : '' }</h4>
          {tokens.map((token, index) => (<div>
              <b>{TOKEN_SYMBOLS[token]}</b>: {formatEther(amounts[index])}
          </div>))}
          {stakedAmount.gt(0) && balance.gt(0) && <b style={{color:'red'}}>Amounts above assume all staked tokens are withdrawn before redeeming.</b> }
          {balance.eq(0) ? <h4 style={{ color: 'red' }}>You must unstake before you can redeem the underlying assets</h4> : <h5>Burn {name} to redeem underlying assets</h5>}
          {mustApprove && <div>
            <h4 style={{ color: 'red' }}>You must approve the UniBurn contract to spend your {name} before you can redeem underlying assets.</h4>
            <button disabled={approveUniBurn.isLoading} onClick={() => approveUniBurn.write()}>
              Approve
            </button>
            {approveUniBurn.isLoading && <p>Approving UniBurn...</p>}
          </div>}
          <button
            disabled={balance.eq(0) || mustApprove || redeem.isLoading}
            onClick={() => redeem.write()}
          >
            Redeem
          </button>
          { redeem.isLoading && <p>Redeeming tokens...</p> }
          { redeem.isError && <p>Error redeeming tokens (check console)</p> }
        </div>
    </div>
}

export function DisplayPoolStuff({ address }: { address: string }) {
    const { data, isError, isLoading, error } = useRedeemableAmounts(address);
    if (isError) {
        console.log(error)
        return <div>
            <h1>Error loading data (check console) </h1>
        </div>
    }
    if (isLoading) {
        return <div>
            <h1>Getting balances...</h1>
        </div>
    }
    if (!data) {
        return <div>
            <h1>No data?</h1>
        </div>
    }
    return <div>
        <PoolTokenAmounts poolName='DEFI5' { ...data.defi5_amounts } address={DEFI5} account={address} />
        <PoolTokenAmounts poolName='CC10' { ...data.cc10_amounts } address={CC10} account={address} />
        <PoolTokenAmounts poolName='FFF' { ...data.fff_amounts } address={FFF} account={address} />
        <PoolTokenAmounts poolName='DEFI5' isPair { ...data.defi5LP_amounts }  address={UNISWAP_PAIRS.defi5} account={address} />
        <PoolTokenAmounts poolName='CC10' isPair { ...data.cc10LP_amounts } address={UNISWAP_PAIRS.cc10} account={address}  />
        <PoolTokenAmounts poolName='FFF' isPair { ...data.fffLP_amounts } address={UNISWAP_PAIRS.fff} account={address} />
    </div>
}
