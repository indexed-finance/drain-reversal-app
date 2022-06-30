import { BigNumber } from "ethers";

export type TokenAmounts = {
  pairAmount: BigNumber;
  poolAmount: BigNumber;
  ethAmount: BigNumber;
  stakedAmount: BigNumber;
  tokens: string[];
  amounts: BigNumber[];
}