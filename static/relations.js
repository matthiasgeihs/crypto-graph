// relations

var primitives = [];
var problems = [];
var implications = [];
var separations = [];

var PRIM = function(id, title) {
  primitives.push({id: id, title: title});
};

var PROB = function(id, title) {
  problems.push({id: id, title: title});
};

var IMPLIES = function(from, to, refid) {
  implications.push({from: from, to: to, refid: refid});
};

var EQUALS = function(from, to, refid) {
  IMPLIES(from, to, refid);
  IMPLIES(to, from, refid);
};

var BBSEP = function(from, to, refid) {
  separations.push({from: from, to: to, refid: refid});
};

// nodes (primitives & problems)
//tbi include definitions of these primitives on the web page

// computational problems
// PROB('FACTOR', 'Factoring');
// PROB('RSA', 'Rivest Shamir Adleman');
// PROB('DLOG', 'Discrete Logarithm');
// PROB('CDH', 'Computational Diffie Hellmann');
// PROB('DDH', 'Decisional Diffie Hellmann');
// // PROB('HSP', 'Hidden Subgroup Problem');
// PROB('SVP', 'Shortest Vector Problem');
// PROB('LWE', 'Learning with Errors');

// var nodeIds = nodes_all.getIds();
// for (id in nodeIds) {
//   nodes_all.update({id: nodeIds[id], fixed: true, x: id * 10, y: id * 60,});
//   if (id > 1) break;
// }

// primitives
// PRIM('OWP','One-Way Permutation');
// PRIM('TDP', 'Trapdoor Permutation');
// PRIM('OWF', 'One-Way Function');
// PRIM('PRNG', 'Pseudo-Random Number Generator');
// PRIM('PRF', 'Pseudo-Random Function');
// PRIM('PRP', 'Pseudo-Random Permutation');
// PRIM('CRHF', 'Collision-Resistant Hash Function');
// PRIM('COM', 'Commitment');
// PRIM('NI-COM', 'Non-Interactive Commitment');
// PRIM('SH-COM', 'Statistically-Hiding Commitment');
// PRIM('HE', 'Homomorphic Encryption');
// PRIM('SKE', 'Secret-Key Encryption');
// PRIM('PKE', 'Public-Key Encryption');
//PRIM('CCA-PKE', 'Chosen Ciphertext Attack Secure Public-Key Encryption');
// PRIM('OT', 'Oblivious Transfer');
// //PRIM('IO', 'Indisitinguishability Obfuscation');
// PRIM('CFP', 'Claw-Free Permutation');
// PRIM('CF-TDP', 'Claw-Free Trapdoor Permutation');
// PRIM('CPA-SIG', 'Chosen Plaintext Attack Secure Digital Signature');
// PRIM('EB-COM', 'Extractable-Binding Commitment');
// PRIM('CB-COM', 'Collapse-Binding Commitment');
// PRIM('ECRH', 'Extractable Collision-Resistant Hash Function');
// PRIM('PIR', 'Private Information Retrieval');
// PRIM('LTDF', 'Lossy Trapdoor Function');
// PRIM('ITDF', 'Injective Trapdoor Function');
// PRIM('TDF', 'Trapdoor Function');
// PRIM('KA', 'Key Agreement');
PRIM('OWF', 'One-Way Function');


// PRS Variants
PRIM('PRS','Pseduorandom States')
PRIM('1PRS','Single-copy PRS')

PRIM('PRSPD','Pseduorandom States with Proofs of Destruction')
PRIM('PRSNPD','Pseduorandom States with Nice Proofs of Destruction')
PRIM('Short Input PRFS', 'Short Input Pseudorandom Function-like States. The input size needs to be Theta(log(n)) qubits.')
PRIM('Long Input PRFS', 'Long Input Pseudorandom Function-like States. The input size needs to be omega(log(n)) qubits.')
//PRIM('Short Input PRFSPD', 'Short Input Pseudorandom Function-like States with Proofs of Destruction')
PRIM('PRFSPD', 'Long Input Pseudorandom Function-like States with Proofs of Destruction')
PRIM('Short Output PRS','Short Output Pseduorandom States. The output state needs to have Theta(log(n)) qubits.')
PRIM('Short Output PRFS',"Short Output Pseduorandom Function-Like States. The output state needs to have Theta(log(n)) qubits.")
PRIM('OWSG','One-way States Generator')
PRIM('EFI','efficiently samplable, statistically far but computationally indistinguishable pairs of mixed quantum states')


// Quantum Applications
PRIM('Private Quantum Coins','Private Quantum Coins')
PRIM('Almost Public Quantum Coins','Almost Public Quantum Coins')

// Quantum Applications with classical communication
PRIM('Classically Verifiable Private Quantum Coins','Classically Verifiable Private Quantum Coins')

// Classical Applications with Quantum Communication
PRIM('CCA-qPKE','CCA Encryption (without Encryption Oracle) with Quantum Pulbic-Keys')
PRIM('CPA-EO-qPKE','CPA with Encryption Oracle Encryption Scheme with Quantum Pulbic-Keys')
PRIM('CPA-qPKE with quantum ciphers','Non-reusable CPA Encryption Scheme with Quantum Pulbic-Keys and Quantum Ciphers')
PRIM('SB-QCOM','Computationally Hiding Statictically Binding Quantum Commitments')
PRIM('NI-SB-QCOM','Non-Interactive Computationally Hiding Statictically Binding Quantum Commitments')
PRIM('NI-SH-QCOM','Non-Interactive Statistically Hiding Computationally Binding Quantum Commitments')

PRIM('OTS with Quantum Public Keys','One-time Signatures with Quantum Public Keys')
PRIM('QMPC','Quantum MPC for P/poly with Dishonest Majority')
PRIM('Quanum Pseudo-encryption','Pseduo-encryption With Quantum Ciphers')
PRIM('Pseudo-encryption','Pseduo-encryption with Classical Ciphers')
PRIM('QSKE','Selective CPA Symmetric Encryption with Quantum Ciphers')

PRIM('Quantum Garbled Circuits','Quantum Garbled Circuits for P/poly')
PRIM('MAC with Quantum Tags','Reusable (Non-CMA) Length Restriged MAC with Quantum Tags')

//Applications with classical communication
PRIM('CCA2 Sym. Encryption w. Classical Ciphers','CCA2 Symmetric Encryption with Classical Ciphers')
PRIM('CMA MAC w. Classical Tags','CMA MAC with Classical Tags')
PRIM('SB-COM','Statictically Binding Computationally Hiding Commitments with Classical Communication')
PRIM('Garbled Circuits','Classical Garbled Circuits for P/poly')
PRIM('OTS','One-time Signature with a Classical Pulbic-Key')


// PRIM('','')
// PRIM('','')
// PRIM('','')
// PRIM('','')

// relations of primitives

IMPLIES('OWF','PRS','JLS18')
IMPLIES('OWF','Long Input PRFS','AQY22')

IMPLIES('Long Input PRFS','PRS','TRV')



IMPLIES('PRS','Private Quantum Coins','JLS18')
IMPLIES('Private Quantum Coins','Almost Public Quantum Coins','BS20')
IMPLIES('Private Quantum Coins','OWSG','MY22b')
IMPLIES('PRS','Short Input PRFS','AQY22')
IMPLIES('Short Input PRFS','PRS','TRV')
IMPLIES('OWF', 'Short Output PRS','BS20b')
IMPLIES('Short Output PRS','PRS','TRV')
IMPLIES('OWF','Short Output PRFS','AGQY22')
IMPLIES('Short Output PRFS','Short Output PRS','TRV')
IMPLIES('Short Input PRFS','SB-QCOM','AQY22')
IMPLIES('SB-COM','SB-QCOM','TRV')
EQUALS('OWSG' ,'OTS with Quantum Public Keys','MY22b')
EQUALS('SB-QCOM' ,'EFI','BCQ22')
EQUALS('QMPC' ,'EFI','BCQ22')
IMPLIES('Short Input PRFS','Quanum Pseudo-encryption','AQY22')
IMPLIES('Quanum Pseudo-encryption','Quantum Garbled Circuits' ,'AQY22')
IMPLIES('Short Output PRS','SB-COM','AGQY22')
IMPLIES('Long Input PRFS','QSKE','AQY22')
IMPLIES('QSKE','Quanum Pseudo-encryption','TRV')
IMPLIES('SB-QCOM','QMPC','MY22a') // PRoved independently in AQY22. Both results rely upon BCKM17.
IMPLIES('Long Input PRFS','MAC with Quantum Tags','AQY22')
IMPLIES('OWF','CCA-qPKE','BMW23')
IMPLIES('Long Input PRFS' ,'CPA-qPKE with quantum ciphers','GSV23')
IMPLIES('OWF','1PRS','MY22a')
IMPLIES('1PRS','NI-SB-QCOM','HMY22')
EQUALS('NI-SB-QCOM', 'NI-SH-QCOM', 'HMY22');
IMPLIES('NI-SB-QCOM','SB-QCOM','TRV')
//PRSPD related:
//--------------
IMPLIES('OWF','PRSNPD','BBSS23')
IMPLIES('OWF','PRFSPD','BBSS23')

IMPLIES('PRSNPD','PRSPD','TRV')
IMPLIES('PRFSPD','PRSPD','TRV')

IMPLIES('PRFSPD','CCA2 Sym. Encryption w. Classical Ciphers','BBSS23')
IMPLIES('PRFSPD','CMA MAC w. Classical Tags','BBSS23')
IMPLIES('PRSNPD','SB-COM','BBSS23')
IMPLIES('CCA2 Sym. Encryption w. Classical Ciphers','Pseudo-encryption','BBSS23')
IMPLIES('PRSPD','Classically Verifiable Private Quantum Coins','BBSS23')
IMPLIES('PRSPD','OTS','BBSS23') 
IMPLIES('PRFSPD' ,'CPA-EO-qPKE','GSV23')
//Classical Implications:
IMPLIES('Classically Verifiable Private Quantum Coins','Private Quantum Coins','TRV')
IMPLIES('Short Output PRFS','Pseudo-encryption','AGQY22')
IMPLIES('Pseudo-encryption','Garbled Circuits','BBSS23')
IMPLIES('CMA MAC w. Classical Tags','MAC with Quantum Tags','TRV')
IMPLIES('Pseudo-encryption','Quanum Pseudo-encryption','TRV')
IMPLIES('CCA2 Sym. Encryption w. Classical Ciphers','QSKE','TRV')
IMPLIES('Garbled Circuits','Quantum Garbled Circuits','TRV')
IMPLIES('OTS','OTS with Quantum Public Keys','TRV')

//STILL MISSING: Relation QPKE


// separations
BBSEP('PRS','OWF',  'Kre21');
BBSEP('Long Input PRFS', 'OWF', 'Kre21');


// relations of primitives
// EQUALS('OWF', 'PRNG', 'hastad1999pseudorandom');
// BBSEP('OWF', 'OWP', 'rudich1984limits');
// BBSEP('OWP', 'KA', 'impagliazzo1989limits');
// BBSEP('OWF', 'NI-COM', 'mahmoody2012curious');
// EQUALS('OWF', 'CPA-SIG', 'rompel1990oneway');
// IMPLIES('OWF', 'SH-COM', 'haitner2007statistically');
// IMPLIES('OWF', 'PRF', 'goldreich1986construct');
// BBSEP('OWP', 'CRHF', 'simon1998finding');
// IMPLIES('OWP', 'NI-COM', 'mahmoody2012curious');
// IMPLIES('OWP', 'OWF');
// // IMPLIES('OWP', 'PRNG', 'yao1982theory');
// IMPLIES('OWP', 'CPA-SIG', 'naor1989universal');
// IMPLIES('CRHF', 'NI-COM', 'halevi1996practical');
// IMPLIES('HE', 'CRHF', 'ishai2005sufficient');
// IMPLIES('HE', 'PIR', 'ishai2005sufficient');
// IMPLIES('PIR', 'CRHF', 'ishai2005sufficient');
// IMPLIES('PIR', 'OT', 'crescenzo2000single');
// IMPLIES('TDP', 'OWP');
// IMPLIES('TDP', 'PKE', 'yao1982theory');
// IMPLIES('TDP', 'OT');
// IMPLIES('TDP', 'KA', 'impagliazzo1989limits');
// IMPLIES('TDP', 'CPA-SIG', 'bellare1992sign');
// IMPLIES('TDP', 'TDF');
// IMPLIES('TDF', 'OWF');
// IMPLIES('PRNG', 'PRF');
// IMPLIES('PRNG', 'COM', 'naor1991bitcommitment');
// IMPLIES('CFP', 'CRHF', 'damgard1987collision');
// IMPLIES('CFP', 'CPA-SIG', 'goldwasser1988digital');
// IMPLIES('SKE', 'OWF', 'impagliazzo1989oneway');
// IMPLIES('PKE', 'KA', 'impagliazzo1989limits');
// IMPLIES('PKE', 'SKE');
// IMPLIES('PRF', 'PRP', 'luby1988construct');
// IMPLIES('PRF', 'SKE', 'goldwasser2008lecture');
// IMPLIES('COM', 'OWF', 'impagliazzo1989oneway');
// IMPLIES('SH-COM', 'COM');
// IMPLIES('EB-COM', 'NI-COM');
// IMPLIES('CB-COM', 'NI-COM');
// IMPLIES('ECRH', 'EB-COM');
// IMPLIES('ECRH', 'CRHF');
// IMPLIES('NI-COM', 'COM');
// IMPLIES('LTDF', 'ITDF', 'peikert2008lossy');
// IMPLIES('LTDF', 'CRHF', 'peikert2008lossy');
// IMPLIES('LTDF', 'OT', 'peikert2008lossy');
// IMPLIES('LTDF', 'PKE', 'peikert2008lossy');
// IMPLIES('LTDF', 'CB-COM', 'unruh2016collapse');
// IMPLIES('LTDF', 'TDF');
// IMPLIES('ITDF', 'TDF');
// IMPLIES('OT', 'KA', 'impagliazzo1989limits');
// IMPLIES('ITDF', 'TDF'); //don't have the notion of trapdoor functions yet

// relations of problems
// IMPLIES('DLOG', 'PRNG', 'blum1984generate');
// IMPLIES('DLOG', 'CFP', 'damgard1987collision');
// IMPLIES('DDH', 'LTDF', 'peikert2008lossy');
// IMPLIES('DDH', 'DLOG');
// IMPLIES('CDH', 'DDH');
// IMPLIES('FACTOR', 'PRNG');
// IMPLIES('FACTOR', 'CFP', 'goldwasser1988digital');
// IMPLIES('FACTOR', 'CF-TDP', 'goldwasser1988digital');
// IMPLIES('RSA', 'FACTOR');
// IMPLIES('RSA', 'TDP', 'rivest1978method');
// IMPLIES('RSA', 'CF-TDP', 'katz2010digital');
// IMPLIES('RSA', 'CPA-SIG', 'hohenberger2009short');
// IMPLIES('CF-TDP', 'TDP');
// IMPLIES('CF-TDP', 'CFP');
// IMPLIES('SVP', 'CRHF', 'goldreich2011collision');
// IMPLIES('SVP', 'OWF', 'ajtai1996generating');
// IMPLIES('SVP', 'LWE', 'brakerski2013classical');
// IMPLIES('LWE', 'LTDF', 'peikert2008lossy');
