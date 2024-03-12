export const FactoryAbI =   [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "airdrop",
      "outputs": [
        {
          "internalType": "contract Airdrop",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_merkleRoot",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "createAirdrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_token",
          "type": "address[]"
        },
        {
          "internalType": "bytes32[]",
          "name": "_merkleRoot",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        }
      ],
      "name": "multipleAirdrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ] ;



 export const FactoryByte =  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610d43806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f4edd47146100515780638da5cb5b1461006657806397dc4a1314610095578063e8f01f26146100a8575b600080fd5b61006461005f366004610439565b6100bb565b005b600054610079906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100796100a336600461051d565b6101b6565b6100646100b6366004610536565b6101e0565b6000546001600160a01b031633146100ee5760405162461bcd60e51b81526004016100e590610569565b60405180910390fd5b81518351148015610100575080518251145b61013c5760405162461bcd60e51b815260206004820152600d60248201526c125b9d985b1a59081a5b9c1d5d609a1b60448201526064016100e5565b60005b83518110156101b05761019e84828151811061015d5761015d6105aa565b6020026020010151848381518110610177576101776105aa565b6020026020010151848481518110610191576101916105aa565b60200260200101516101e0565b806101a8816105c0565b91505061013f565b50505050565b600181815481106101c657600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b0316331461020a5760405162461bcd60e51b81526004016100e590610569565b6000805460405185916001600160a01b03169085906102289061033a565b6001600160a01b0393841681529290911660208301526040820152606001604051809103906000f080158015610262573d6000803e3d6000fd5b50905081156102e6576040516323b872dd60e01b81523360048201526001600160a01b038281166024830152604482018490528516906323b872dd906064016020604051808303816000875af11580156102c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e491906105e7565b505b6001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0392909216919091179055505050565b6106fd8061061183390190565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561038657610386610347565b604052919050565b600067ffffffffffffffff8211156103a8576103a8610347565b5060051b60200190565b80356001600160a01b03811681146103c957600080fd5b919050565b600082601f8301126103df57600080fd5b813560206103f46103ef8361038e565b61035d565b82815260059290921b8401810191818101908684111561041357600080fd5b8286015b8481101561042e5780358352918301918301610417565b509695505050505050565b60008060006060848603121561044e57600080fd5b833567ffffffffffffffff8082111561046657600080fd5b818601915086601f83011261047a57600080fd5b8135602061048a6103ef8361038e565b82815260059290921b8401810191818101908a8411156104a957600080fd5b948201945b838610156104ce576104bf866103b2565b825294820194908201906104ae565b975050870135925050808211156104e457600080fd5b6104f0878388016103ce565b9350604086013591508082111561050657600080fd5b50610513868287016103ce565b9150509250925092565b60006020828403121561052f57600080fd5b5035919050565b60008060006060848603121561054b57600080fd5b610554846103b2565b95602085013595506040909401359392505050565b60208082526021908201527f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f6040820152603760f91b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6000600182016105e057634e487b7160e01b600052601160045260246000fd5b5060010190565b6000602082840312156105f957600080fd5b8151801515811461060957600080fd5b939250505056fe608060405234801561001057600080fd5b506040516106fd3803806106fd83398101604081905261002f91610082565b600080546001600160a01b039485166001600160a01b031991821617909155600191909155600280549290931691161790556100be565b80516001600160a01b038116811461007d57600080fd5b919050565b60008060006060848603121561009757600080fd5b6100a084610066565b92506100ae60208501610066565b9150604084015190509250925092565b610630806100cd6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806363c375d01161005b57806363c375d0146100f45780638da5cb5b14610107578063da62fba914610132578063fc0c546a1461015557600080fd5b806321ff99701461008d5780632eb4a7ab146100a25780633d13f874146100be578063564bec64146100d1575b600080fd5b6100a061009b3660046104c1565b610168565b005b6100ab60015481565b6040519081526020015b60405180910390f35b6100a06100cc3660046104f6565b610184565b6100e46100df3660046104f6565b61030a565b60405190151581526020016100b5565b6100a06101023660046104c1565b610398565b60025461011a906001600160a01b031681565b6040516001600160a01b0390911681526020016100b5565b6100e4610140366004610580565b60036020526000908152604090205460ff1681565b60005461011a906001600160a01b031681565b6002546001600160a01b0316331461017f57600080fd5b600155565b6001600160a01b03841660009081526003602052604090205460ff16156101e45760405162461bcd60e51b815260206004820152600f60248201526e185b1c9958591e4818db185a5b5959608a1b60448201526064015b60405180910390fd5b6101f08484848461030a565b61022e5760405162461bcd60e51b815260206004820152600f60248201526e1b9bdd081dda1a5d195b1a5cdd1959608a1b60448201526064016101db565b6001600160a01b03848116600081815260036020526040808220805460ff191660011790559054905163a9059cbb60e01b81526004810192909252602482018690529091169063a9059cbb906044016020604051808303816000875af115801561029c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c0919061059b565b50836001600160a01b03167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4846040516102fc91815260200190565b60405180910390a250505050565b6040516bffffffffffffffffffffffff19606086901b16602082015260348101849052600090819060540160405160208183030381529060405280519060200120905061038e84848080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050600154915084905061042c565b9695505050505050565b6002546001600160a01b031633146103af57600080fd5b60005460025460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810184905291169063a9059cbb906044016020604051808303816000875af1158015610404573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610428919061059b565b5050565b6000826104398584610442565b14949350505050565b600081815b84518110156104875761047382868381518110610466576104666105bd565b602002602001015161048f565b91508061047f816105d3565b915050610447565b509392505050565b60008183106104ab5760008281526020849052604090206104ba565b60008381526020839052604090205b9392505050565b6000602082840312156104d357600080fd5b5035919050565b80356001600160a01b03811681146104f157600080fd5b919050565b6000806000806060858703121561050c57600080fd5b610515856104da565b935060208501359250604085013567ffffffffffffffff8082111561053957600080fd5b818701915087601f83011261054d57600080fd5b81358181111561055c57600080fd5b8860208260051b850101111561057157600080fd5b95989497505060200194505050565b60006020828403121561059257600080fd5b6104ba826104da565b6000602082840312156105ad57600080fd5b815180151581146104ba57600080fd5b634e487b7160e01b600052603260045260246000fd5b6000600182016105f357634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122010e5c0cafa32e9c2451c5d3b812e2532c0e2af51d2590c34c1b091a2b48423c964736f6c63430008140033a264697066735822122013bd5a558ffdcd4b348252e08007ec9d4d3c6f97041b1fa930cb7769da17b58c64736f6c63430008140033";
 