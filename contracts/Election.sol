pragma solidity ^0.7.0;

contract Election{
	struct Candidate{
		uint id;
		string name;
		uint voteCount;
	}

	mapping(uint=>Candidate) public candidates;
	mapping (address=>bool) public votedornot;

	uint public candidatesCount;

	event electionupdated(
		uint id,
		string name,
		uint votecount);

	constructor() {
		addCandidate('Candidate1');
		addCandidate('Candidate2');
	}

	function addCandidate(string memory  _name) private{
		candidatesCount++;
		candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
	}

	function Vote(uint _id) public {
		require(!votedornot[msg.sender], 'You have voted for the candidate');

		require(candidates[_id].id!=0,'The candidate id is not valid');

		candidates[_id].voteCount+=1;

		votedornot[msg.sender]=false;
		emit electionupdated(_id,candidates[_id].name,candidates[_id].voteCount);
	}

}