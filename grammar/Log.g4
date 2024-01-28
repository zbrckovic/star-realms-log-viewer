grammar Log;

start: NEWLINE* lines+=line* NEWLINE*;

line: actionLine | effectLine;

// Actions
actionLine : action NEWLINE ;
action
    : playAllCardsAction
    | playOneCardAction
    | acquireCardAction
    | endTurnAction
    | attackPlayerAction
    | attackBaseAction
    | scrapSubjectCardAction
    | scrapObjectCardAction
    | noScrapObjectCardAction
    | discardCardAction
    | resolveDiscardAction
    | activateCardAction
    | choseAction
    | genericResolveAction
    ;

playAllCardsAction : 'Play all';
playOneCardAction: 'Played' card+=WORD+;
acquireCardAction : 'Acquired' card+=WORD+;
endTurnAction: player=WORD 'ends turn' turn=NUM;
attackPlayerAction: 'Attacked' targetPlayer=WORD 'for' damage=NUM '(New Authority:'? signedNum ')';
attackBaseAction: 'Attacked' base+=WORD+;
scrapSubjectCardAction: 'Scrapping' card+=WORD+;
scrapObjectCardAction: player=WORD 'is scrapping' ':'? card+=WORD+;
noScrapObjectCardAction: player=WORD 'is not scrapping any cards';
discardCardAction: player=WORD 'is discarding' card+=WORD+;
resolveDiscardAction: 'Resolving Discard' cards=NUM 'cards';
activateCardAction: 'Activating' card+=WORD+;
choseAction: 'Chose' (addTrade | addCombat | addAuthority);
genericResolveAction: 'Resolving' (WORD | NUM)*;

// Effects
effectLine : INDENT effect NEWLINE;
effect
    : shuffledEffect
    | turnChangedEffect
    | cardToOwnerEffect
    | cardToOpponentEffect
    | sideEffect
    | drewCardsEffect
    | refreshedAllyIndicatorsEffect
    | scrappedCardEffect
    | noMoreCardsToDiscardEffect
    | discardedCardEffect
    | wonGameEffect
    | destroyedBaseEffect
    | revealedEventEffect
    | acquiredToTheTopOfDeckEffect
    ;

shuffledEffect: 'Shuffled discard pile to form new deck';
turnChangedEffect: 'It is now ' player=WORD '\'s turn' turn=NUM;
cardToOwnerEffect : player=WORD '>' card+=WORD+ (tradeChange | combatChange | authorityChange | ability='ability available');
cardToOpponentEffect: player=WORD '<' card+=WORD+ discardChange;
sideEffect: player=WORD '-' (tradeChange | combatChange | authorityChange);
drewCardsEffect: 'Drew' cards=NUM 'cards.';
refreshedAllyIndicatorsEffect: 'Refresh ally indicators';
scrappedCardEffect: 'Scrapped' card+=WORD+;
noMoreCardsToDiscardEffect: 'no more cards to discard';
discardedCardEffect: 'Discarded' card+=WORD+;
wonGameEffect: '===' player=WORD 'has won the game. ===';
destroyedBaseEffect: 'Destroyed' base+=WORD+;
revealedEventEffect: 'Revealed event' event+=WORD+;
acquiredToTheTopOfDeckEffect: 'Acquired' card+=WORD+ 'to the top of the deck' '.'?;

// Misc
addTrade: 'Add' amount=NUM 'Trade';
addCombat: 'Add' amount=NUM 'Combat';
addAuthority: 'Add' amount=NUM 'Authority';

tradeChange : change=signedNum 'Trade' '(Trade:' final=signedNum ')';
combatChange : change=signedNum 'Combat' '(Combat:' final=signedNum ')';
authorityChange : change=signedNum 'Authority' '(Authority:' final=signedNum ')';
discardChange : change=signedNum 'Discard' '(Discarding:' final=signedNum ')';

signedNum
    : sign='-' NUM
    | sign='+' NUM
    | NUM
    ;

// Tokens
NEWLINE: '\r'? '\n';
INDENT: '        ';
SPACE: ' '+ -> skip;

COLOR_OPEN: '<color=#' [a-fA-F0-9]+ '>' -> skip;
COLOR_CLOSE: '</color>' -> skip;

NUM: [0-9]+;
WORD: [a-zA-Z0-9_]+;
UNKNOWN: .;
