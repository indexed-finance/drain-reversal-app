/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

import { TokenData, TokenObject } from '../types'

interface RedemptionLensInterface extends ethers.utils.Interface {
  functions: {
    "getPairAssetsRedeemable(address,uint256)": FunctionFragment;
    "getPoolAssetsRedeemable(address,uint256)": FunctionFragment;
    "getRedeemableBalances(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPairAssetsRedeemable",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolAssetsRedeemable",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRedeemableBalances",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPairAssetsRedeemable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolAssetsRedeemable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedeemableBalances",
    data: BytesLike
  ): Result;

  events: {};
}

export class RedemptionLens extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RedemptionLensInterface;

  functions: {
    getPairAssetsRedeemable(
      lpToken: string,
      pairAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tokenAmounts: TokenData;
      0: TokenData;
    }>;

    "getPairAssetsRedeemable(address,uint256)"(
      lpToken: string,
      pairAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tokenAmounts: TokenData;
      0: TokenData;
    }>;

    getPoolAssetsRedeemable(
      pool: string,
      poolAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tokenAmounts: TokenData;
      0: TokenData;
    }>;

    "getPoolAssetsRedeemable(address,uint256)"(
      pool: string,
      poolAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tokenAmounts: TokenData;
      0: TokenData;
    }>;

    getRedeemableBalances(
      account: string,
      overrides?: CallOverrides
    ): Promise<TokenObject>;

    "getRedeemableBalances(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<TokenObject>;
  };

  getPairAssetsRedeemable(
    lpToken: string,
    pairAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<TokenData>;

  "getPairAssetsRedeemable(address,uint256)"(
    lpToken: string,
    pairAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<TokenData>;

  getPoolAssetsRedeemable(
    pool: string,
    poolAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<TokenData>;

  "getPoolAssetsRedeemable(address,uint256)"(
    pool: string,
    poolAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<TokenData>;

  getRedeemableBalances(
    account: string,
    overrides?: CallOverrides
  ): Promise<TokenObject>;

  "getRedeemableBalances(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<TokenObject>;

  callStatic: {
    getPairAssetsRedeemable(
      lpToken: string,
      pairAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<TokenData>;

    "getPairAssetsRedeemable(address,uint256)"(
      lpToken: string,
      pairAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<TokenData>;

    getPoolAssetsRedeemable(
      pool: string,
      poolAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<TokenData>;

    "getPoolAssetsRedeemable(address,uint256)"(
      pool: string,
      poolAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<TokenData>;

    getRedeemableBalances(
      account: string,
      overrides?: CallOverrides
    ): Promise<TokenObject>;

    "getRedeemableBalances(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<TokenObject>;
  };

  filters: {};

  estimateGas: {
    getPairAssetsRedeemable(
      lpToken: string,
      pairAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPairAssetsRedeemable(address,uint256)"(
      lpToken: string,
      pairAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolAssetsRedeemable(
      pool: string,
      poolAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPoolAssetsRedeemable(address,uint256)"(
      pool: string,
      poolAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRedeemableBalances(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRedeemableBalances(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPairAssetsRedeemable(
      lpToken: string,
      pairAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPairAssetsRedeemable(address,uint256)"(
      lpToken: string,
      pairAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolAssetsRedeemable(
      pool: string,
      poolAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPoolAssetsRedeemable(address,uint256)"(
      pool: string,
      poolAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRedeemableBalances(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRedeemableBalances(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
