import { BigNumber } from "ethers";

export interface TokenAmounts {
  pairAmount: BigNumber;
  poolAmount: BigNumber;
  ethAmount: BigNumber;
  stakedAmount: BigNumber;
  tokens: string[];
  amounts: BigNumber[];
}

export interface TokenData extends TokenAmounts {
  0: BigNumber;
  1: BigNumber;
  2: BigNumber;
  3: BigNumber;
  4: string[];
  5: BigNumber[];
}

export type TokenElement = {
    "0xfa6de2697D59E88Ed7Fc4dFE5A33daC43565ea41": TokenData;
    "0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3": TokenData;
    "0xaBAfA52D3d5A2c18A4C1Ae24480D22B831fC0413": TokenData;
    0: TokenData;
    1: TokenData;
    2: TokenData;
    3: TokenData;
    4: TokenData;
    5: TokenData;
}

export type TokenObject = TokenElement & {
  "0x8dCBa0B75c1038c4BaBBdc0Ff3bD9a8f6979Dd13": TokenData;
  "0x2701eA55b8B4f0FE46C15a0F560e9cf0C430f833": TokenData;
  "0x9A60F0A46C1485D4BDA7750AdB0dB1b17Aa48A33": TokenData;
}
