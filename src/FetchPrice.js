// import {ethers} from "ethers"
const {ethers}=require("ethers");
const {abi:QuoterABI}=require("@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json")
// import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'

const  provider=new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/qHM1xJXNUCZE5QkllOuPlromiTnb3Dam"
)

const fetchPrice=async(addressFrom,addressTo,humanValue)=>{
    
    const QUOTER_CONTRACT_ADDRESS="0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"
    const quoterContract = new ethers.Contract(
        QUOTER_CONTRACT_ADDRESS,
        QuoterABI,
        provider
      )
      console.log(quoterContract)

      const amountIn = ethers.utils.parseUnits(humanValue,18)
      const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
          addressFrom,
          addressTo,
          3000,
          amountIn.toString(),
          0
        )
      const amount = ethers.utils.formatUnits(quotedAmountOut.toString(),18);
      return amount;
  
}

const main =async()=>{
    const addressFrom="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    const addressTo="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"

    const humanValue="1"
    const result=await fetchPrice(addressFrom,addressTo,humanValue);
    // console.log(result);
}

main()