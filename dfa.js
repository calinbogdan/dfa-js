"use strict";

/* Deterministic finite automata */
function DeterministicFiniteAutomata(alphabet, initialState, finalStates, states, transitions) {
    this.alphabet = alphabet;
    this.initialState = initialState;
    this.finalStates = finalStates;
    this.states = states;
    this.transitions = transitions;
}

DeterministicFiniteAutomata.prototype.accepts = function (word) {
    if (this.notInAlphabet(word)) { return false; }

    var characters = word.split('');

    var currentState = this.initialState;
    var symbol = "";

    while (characters.length) {
        symbol = characters.shift();
        if (this.currentStateNotBlocked(currentState, symbol)) {
            currentState = this.nextStateFor(currentState, symbol);
        }
    }

    return this.isFinalState(currentState);
};

DeterministicFiniteAutomata.prototype.notInAlphabet = function (word) {
    var alphabet = this.alphabet;
    return word.split('').every(function (element) {
        alphabet.includes(element);
    });
};

DeterministicFiniteAutomata.prototype.currentStateNotBlocked = function (currentState, symbol) {
    return this.transitions[currentState].some(function (transition) { return transition.symbol === symbol; });
};

DeterministicFiniteAutomata.prototype.nextStateFor = function (state, symbol) {
    return this.transitions[state].find(function (transition) { return transition.symbol === symbol; }).target;
};

DeterministicFiniteAutomata.prototype.isFinalState = function (state) {
    return this.finalStates.includes(state);
};

module.exports = DeterministicFiniteAutomata;

