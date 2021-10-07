pragma experimental ABIEncoderV2;
pragma solidity ^0.5.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract BalanceGetter {
    struct Amount{
        address token;
        uint256 balance;
    }

    constructor() public {}

    function getBalances(address[] memory _tokens, address _customer)
        public 
        returns (Amount[] memory)
    {
        Amount[] memory amounts = new Amount[](_tokens.length);

        for(uint i=0; i<_tokens.length;i++){
            IERC20 token = IERC20(_tokens[i]);
            amounts[i].token = _tokens[i];
            amounts[i].balance = token.balanceOf(_customer);
        }
        return amounts;
    }
}