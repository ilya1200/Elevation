const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const strand = [];

console.log("Start genes = ",genes);
console.log("Start strand = ",strand);


console.log("Pushed two first elements from genes to strand");
strand.push(genes.splice())
console.log("Now genes strand should be [ACADM,GLMN]");
console.log("strand = ",strand);

console.log("Swapped  RLF  with  CRYZ in genes");
const rlf = genes[2];
genes[2]=genes[genes.length-1];
genes[genes.length-1] = rlf;
console.log("Now genes should be [ACADM,GLMN,CRYZ,AZIN2,RLF]");
console.log("genes = ",genes);


console.log("Extracted 'AZIN2' from genes")
const azin2 = genes.splice(3,1);
console.log("Now genes should be [ACADM,GLMN,CRYZ,RLF]");
console.log(genes);
console.log("Now azin2 should be ['AZIN2']");
console.log(azin2);

console.log("Add 'AZIN2' twice to the end of strand")
strand.push(...azin2,...azin2);
console.log("Now strand should be [ACADM,GLMN,AZIN2,AZIN2]");
console.log("strand = ",strand);

console.log("Add 'FXT' to the start of strand")
strand.unshift('FXT');
console.log("Now strand should be [FXT,ACADM,GLMN,AZIN2,AZIN2]");
console.log("strand = ",strand);

