// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


//Function to create P. Aequor Organisms
function pAequorFactory(num, arr){
  return{
    specimenNum: num,
    dna: arr,
    //Mutate the DNA of P. Aequor
    mutate(){
      console.log('Initial DNA:', this.dna)
      this.dna.forEach((element, index) => {
        let newBase = returnRandBase()
        while(newBase === element){
          newBase = returnRandBase()
        }
        this.dna[index] = newBase;
      });
      console.log('Mutated DNA:', this.dna);
      return this.dna
    },
    //Compare 2 different DNAs of P. Aequor organisms
    compareDNA(pAequor){
      console.log(pAequor);
      console.log(this.dna);
      let count = 0;
      this.dna.forEach((element, index) =>{
        if (pAequor.dna[index] === this.dna[index]){
          count ++;
        }
      });
      const similarity = (count/this.dna.length)*100
      console.log(count)
      console.log(`specimen #1 and specimen #2 have ${similarity}% DNA in common`)
    },
    //Find surviving chance of the P. Aequor organism
    willLikelySurvive(){
      let count = 0;
      this.dna.forEach((element) =>{
        if (element === 'C' || element === 'G' ){
          count++
        }
      });
      const chance = (count/this.dna.length)
        if (chance >= 0,6){
          console.log('You will be fine buddy👍')
          return true;
        }else{
          console.log('There is still chance💪')
          return false;
        }
    }
  }
};




const myAequor = pAequorFactory(1, mockUpStrand());
console.log(myAequor)
const anotherAequor = pAequorFactory(2, mockUpStrand());
myAequor.compareDNA(anotherAequor);
myAequor.willLikelySurvive();


//Log a newly created instance of P. Aequor
//console.log(pAequorFactory(1, mockUpStrand()))

//const myAequor = pAequorFactory(1, mockUpStrand());
//myAequor.mutate();
