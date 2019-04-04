"use strict";

function NondeterministicFiniteAutomata(alphabet, initialState, finalStates, states, transitions) {
    this.alphabet = alphabet;
    this.initialState = initialState;
    this.finalStates = finalStates;
    this.states = states;
    this.transitions = transitions;
}

NondeterministicFiniteAutomata.prototype.accepts = function (word) {
    if (this.notInAlphabet(word)) { return false; }

    

    // if at least one possible crossing reaches a final state then the word is accepted
};

NondeterministicFiniteAutomata.prototype.getEpsilonClosureFor = function (state) {
    var self = this;
    function getEpsilonTargetsFor(state) {
        return self.transitions[state]
                .filter(function (transition) { return transition.symbol === "" && transition.target !== state; })
                .targets;
    }   
    
    var results = [state];
    results.push(getEpsilonTargetsFor(state));

    
};

NondeterministicFiniteAutomata.prototype.notInAlphabet = function (word) {
    var self = this;
    return word.split('').some(function (char) {
        return !self.alphabet.includes(char);
    });
};