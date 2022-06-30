import { useContractRead, useContractWrite } from "wagmi";
import {
  IERC20Abi,
  MultiTokenStakingAbi,
  MULTI_TOKEN_STAKING,
  PAIR_POOLS,
  RedemptionLensAbi,
  REDEMPTION_LENS,
  RestrictedIndexPoolAbi,
  STAKING_TOKENS,
  TOKEN_SYMBOLS,
  UNIBURN,
  UniBurnAbi,
  UNISWAP_PAIRS,
} from "../config";
import {
  RedemptionLens,
  RedemptionLensInterface,
} from "../typechain/RedemptionLens";
import { Interface } from "ethers/lib/utils";
import { BigNumber } from "ethers";
import { useMemo } from "react";

export type PoolName = keyof typeof UNISWAP_PAIRS;

const LensInterface = new Interface(
  RedemptionLensAbi
) as RedemptionLensInterface;

export const useUniBurnAllowance = (account: string, token: string): {
  data: BigNumber | undefined;
  isError: boolean;
  isLoading: boolean;
  error: Error | null;
} => {
  const { data, isError, isLoading, error } = useContractRead({
    addressOrName: token,
    contractInterface: IERC20Abi,
    functionName: "allowance",
    args: [account, UNIBURN],
    watch: true
  })
  return {
    data: data as BigNumber | undefined,
    isError,
    isLoading,
    error
  }
}

export const useRedeemableAmounts = (
  account: string
): {
  data:
    | Awaited<ReturnType<RedemptionLens["getRedeemableBalances"]>>
    | undefined;
  isError: boolean;
  isLoading: boolean;
  error: Error | null;
} => {
  const { data, isError, isLoading, error } = useContractRead({
    addressOrName: REDEMPTION_LENS,
    contractInterface: LensInterface,
    functionName: "getRedeemableBalances",
    args: [account],
    // cacheOnBlock: true,
    watch: true,
    onSuccess: (data: any) => {
      console.log("GOT DATA OMG OMG");
      console.log(data);
    },
  });
  return {
    data: data as
      | Awaited<ReturnType<RedemptionLens["getRedeemableBalances"]>>
      | undefined,
    isError,
    isLoading,
    error,
  };
};

export const useRedeemActions = ({
  account,
  token,
  isPair,
  stakedAmount,
  totalBalance,
}: {
  account: string;
  token: string;
  isPair?: boolean;
  stakedAmount: BigNumber;
  totalBalance: BigNumber;
}) => {
  const redemptionContractConfig = useMemo(() => {
    if (isPair) {
      const poolName = TOKEN_SYMBOLS[PAIR_POOLS[token]];
      return {
        addressOrName: UNIBURN,
        contractInterface: UniBurnAbi,
        functionName: `redeem${poolName}LP`,
      };
    }
    return {
      addressOrName: token,
      contractInterface: RestrictedIndexPoolAbi,
      functionName: "redeemAll",
    };
  }, [isPair, token]);

  const unstake = useContractWrite({
    addressOrName: MULTI_TOKEN_STAKING,
    contractInterface: MultiTokenStakingAbi,
    functionName: "withdrawAndHarvest",
    args: [STAKING_TOKENS[token], stakedAmount, account],
  });

  const approveUniBurn = useContractWrite({
    addressOrName: token,
    contractInterface: IERC20Abi,
    functionName: 'approve',
    args: [UNIBURN, totalBalance]
  })

  const redeem = useContractWrite(redemptionContractConfig);

  return {
    unstake,
    redeem,
    approveUniBurn
  };
};