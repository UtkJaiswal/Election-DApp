var Election = artifacts.require("./Election.sol");


contract("Election", function(accounts){

	var electionInstance;

	it("Initializes with 2 candidates", () => {
		return Election.deployed().then((instance) => {
			return instance.candidatesCount();
		}).then((count) => {
			assert.equal(count,2);
		});
	});

	it("Initializes candidates with correct credentials", ()=>{
		return Election.deployed()
			.then((instance)=>{
				electionInstance = instance;
				return electionInstance.candidates(1);
			}).then((candidate)=>{
				assert.equal(candidate[0],1,"Correct id");
				assert.equal(candidate[1],"Candidate1","Correct name");
				assert.equal(candidate[2],0,"Correct vote count");
				return electionInstance.candidates(2);
			}).then((candidate)=>{
				assert.equal(candidate[0],2,"Correct id");
				assert.equal(candidate[1],"Candidate2","Correct name");
				assert.equal(candidate[2],0,"Correct vote count");
			});
	});
});	