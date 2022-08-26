//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    // define the paramaters
    uint256 transactionsCounter;
    // define the event
    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );
    // define the object
    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    TransferStruct[] transactions;

    // build the function to run the contract
    // add to block
    function addToBlock(
        address payable receiver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transactionsCounter += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    // getall transactions
    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    // get transaction count
    function getTransactionsCount() public view returns (uint256) {
        return transactionsCounter;
    }
}
