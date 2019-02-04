pragma solidity ^0.4.24;

contract ERC20Interface {
    function totalSupply() public view returns (uint);
    function balanceOf(address tokenOwner) public view returns (uint balance);
    function transfer(address to, uint tokens) public returns (bool success);

    
    function allowance(address tokenOwner, address spender) public view returns (uint remaining);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);
    
    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}

contract KittenToken is ERC20Interface{
    string public name = "Kitten Token";
    string public symbol = "KITN";
    uint public decimals = 0;
    
    uint public totalSupply;
    address public founder;
    
    mapping(address => uint) public balances;
    
    mapping(address => mapping(address => uint)) allowed;
    
    event Transfer(address indexed _from, address indexed _to, uint _tokens);
    event Approval(address indexed _tokenOwner, address indexed _spender, uint _tokens);


    constructor() public {
        totalSupply = 1000000;
        founder = msg.sender;
        balances[founder] = totalSupply;
    }
    
    
    function allowance(address _tokenOwner, address _spender) public view returns(uint){
        return allowed[_tokenOwner][_spender];
    }
    
    
    function approve(address _spender, uint _tokens) public returns(bool){
        require(balances[msg.sender] >= _tokens && _tokens > 0);
        
        allowed[msg.sender][_spender] = _tokens;
        emit Approval(msg.sender, _spender, _tokens);
        return true;
    }
    
    function transferFrom(address _from, address _to, uint _tokens) public returns(bool){
        require(allowed[_from][_to] >= _tokens);
        require(balances[_from] >= _tokens);
        
        balances[_from] -= _tokens;
        balances[_to] += _tokens;
        
        
        allowed[_from][_to] -= _tokens;
        
        return true;
    }
    
    function totalSupply() public view returns (uint){
        return totalSupply;
    }
    
    function balanceOf(address _tokenOwner) public view returns (uint balance){
        return balances[_tokenOwner];
    }
     
     
    function transfer(address _to, uint _tokens) public returns (bool success){
        require(balances[msg.sender] >= _tokens && _tokens > 0);
         
        balances[_to] += _tokens;
        balances[msg.sender] -= _tokens;
        emit Transfer(msg.sender, _to, _tokens);
        return true;
    }
    
}
