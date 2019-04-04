var DeterministicFiniteAutomata = require('./automatas/dfa');
var config = require('./dfa_config.json');

var dfa = new DeterministicFiniteAutomata(
    config.alphabet, 
    config.initialState, 
    config.finalStates, 
    config.states, 
    config.transitions);

console.log(dfa.accepts("00"));

