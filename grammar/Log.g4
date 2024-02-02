grammar Log;

start: NEWLINE* lines+=line* NEWLINE*;

line: actionLine | effectLine;

// Actions - lines which start without an indent.
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
    | noDiscardCardAction
    | resolveDiscardAction
    | resolveDiscardAndRedrawAction
    | activateCardAction
    | choseAction
    | genericResolveAction
    | selectCardAction
    | returnCardAction
    ;

playAllCardsAction : PLAY_ALL;
playOneCardAction: PLAYED_CAP card;
acquireCardAction : ACQUIRED card;
endTurnAction: player=word ENDS_TURN turn=NUM;
attackPlayerAction: ATTACKED_CAP targetPlayer=word FOR damage=NUM '(' NEW_AUTHORITY ':'? signedNum ')';
attackBaseAction: ATTACKED_CAP card;
scrapSubjectCardAction: SCRAPPING_CAP card;
scrapObjectCardAction: player=word IS_SCRAPPING ':'? card;
noScrapObjectCardAction: player=word IS_NOT_SCRAPPING_ANY_CARDS;
discardCardAction: player=word IS_DISCARDING card;
noDiscardCardAction: player=word IS_NOT_DISCARDING_ANY_CARDS '.';
resolveDiscardAction: RESOLVING_DISCARD cards=NUM CARDS;
resolveDiscardAndRedrawAction: RESOLVING_DISCARD AND REDRAW_UP_TO cards=NUM CARDS2;
activateCardAction: ACTIVATING card;
choseAction: CHOSE_CAP (addTrade | addCombat | addAuthority);
genericResolveAction: RESOLVING_CAP (word | NUM)*;
selectCardAction: player=word IS? SELECTING card;
returnCardAction: player=word IS_RETURNING card;

// Effects - lines which start with an indent.
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
    | revealedEffect
    | acquiredToTheTopOfDeckEffect
    | acquiredToHandEffect
    | changedToOnTableImage
    | changedCardToCard
    ;

shuffledEffect: SHUFFLED_DISCARD_PILE_TO_FORM_NEW_DECK;
turnChangedEffect: IT_IS_NOW player=word '\'s' TURN turn=NUM;
cardToOwnerEffect : player=word '>' card (tradeChange | combatChange | authorityChange | ability=ABILITY_AVAILABLE);
cardToOpponentEffect: player=word '<' card (discardChange | authorityChange);
sideEffect: player=word '-' (tradeChange | combatChange | authorityChange | discardChange);
drewCardsEffect: DREW_CAP cards=NUM CARDS '.';
refreshedAllyIndicatorsEffect: REFRESH_ALLY_INDICATORS;
scrappedCardEffect: SCRAPPED_CAP card;
noMoreCardsToDiscardEffect: NO_MORE_CARDS_TO_DISCARD;
discardedCardEffect: DISCARDED_CAP card;
wonGameEffect: '===' player=word HAS_WON_THE_GAME '.' '===';
destroyedBaseEffect: DESTROYED_CAP card;
revealedEventEffect: REVEALED_EVENT card;
revealedEffect: REVEALED_CAP card;
acquiredToTheTopOfDeckEffect: ACQUIRED card TO_THE_TOP_OF_THE_DECK '.'?;
acquiredToHandEffect: ACQUIRED card TO_HAND '.';
changedToOnTableImage: CHANGED_CAP card TO_ON_TABLE_IMAGE;
changedCardToCard: CHANGED_CAP fromCard=card TO toCard=card;

// Misc - supporting rules for both actions and effects.
card: name+=word+;

addTrade: ADD amount=NUM TRADE_CAP;
addCombat: ADD amount=NUM COMBAT_CAP;
addAuthority: ADD amount=NUM AUTHORITY_CAP;

tradeChange : change=signedNum TRADE_CAP '(' TRADE_CAP ':' final=signedNum ')';
combatChange : change=signedNum COMBAT_CAP '(' COMBAT_CAP ':' final=signedNum ')';
authorityChange : change=signedNum AUTHORITY_CAP '(' AUTHORITY_CAP ':' final=signedNum ')';
discardChange : change=signedNum DISCARD_CAP '(' DISCARDING_CAP ':' final=signedNum ')';

signedNum
    : sign='-' NUM
    | sign='+' NUM
    | NUM
    ;

word
    : TRADE_CAP
    | SCRAPPING_CAP
    | SCRAPPED_CAP
    | REVEALED_CAP
    | RESOLVING_CAP
    | PLAYED_CAP
    | DREW_CAP
    | DISCARDING_CAP
    | DISCARDED_CAP
    | DISCARD_CAP
    | DESTROYED_CAP
    | COMBAT_CAP
    | CHOSE_CAP
    | CHANGED_CAP
    | AUTHORITY_CAP
    | ATTACKED_CAP
    | ADD
    | ACTIVATING
    | ACQUIRED
    | TURN
    | TO
    | SELECTING
    | IS
    | FOR
    | ENDS
    | CARDS
    | AND
    | WORD
    ;

// LEXER

// Phrases - We are assuming these phrases will never reveal in names of cards. For simplicity we are
// letting lexer group them as single tokens.
RESOLVING_DISCARD: 'Resolving Discard';
REDRAW_UP_TO: 'Redraw up to';
SHUFFLED_DISCARD_PILE_TO_FORM_NEW_DECK: 'Shuffled discard pile to form new deck';
REVEALED_EVENT: 'Revealed event';
REFRESH_ALLY_INDICATORS: 'Refresh ally indicators';
PLAY_ALL: 'Play all';
NEW_AUTHORITY: 'New Authority';
IT_IS_NOW: 'It is now';
TO_THE_TOP_OF_THE_DECK: 'to the top of the deck';
TO_ON_TABLE_IMAGE: 'to on-table image';
TO_HAND: 'to hand';
NO_MORE_CARDS_TO_DISCARD: 'no more cards to discard';
IS_SCRAPPING: 'is scrapping';
IS_RETURNING: 'is returning';
IS_NOT_SCRAPPING_ANY_CARDS: 'is not scrapping any cards';
IS_NOT_DISCARDING_ANY_CARDS: 'is not discarding any cards';
IS_DISCARDING: 'is discarding';
HAS_WON_THE_GAME: 'has won the game';
ENDS_TURN: 'ends turn';
ABILITY_AVAILABLE: 'ability available';

NEWLINE: '\r'? '\n';
INDENT: '        ';
SPACE: ' '+ -> skip; // We don't care about spaces which are not indentations.

// Color tags occur in various places. It's easies if we just dump them.
COLOR_OPEN: '<color=#' [a-fA-F0-9]+ '>' -> skip;
COLOR_CLOSE: '</color>' -> skip;

NUM: [0-9]+;

// Words which are used in grammar rules. Some of these words can occur in card names. So we need to
// make sure they are also counted as words.
TRADE_CAP: 'Trade';
SCRAPPING_CAP: 'Scrapping';
SCRAPPED_CAP: 'Scrapped';
REVEALED_CAP: 'Revealed';
RESOLVING_CAP: 'Resolving';
PLAYED_CAP: 'Played';
DREW_CAP: 'Drew';
DISCARDING_CAP: 'Discarding';
DISCARDED_CAP: 'Discarded';
DISCARD_CAP: 'Discard';
DESTROYED_CAP: 'Destroyed';
COMBAT_CAP: 'Combat';
CHOSE_CAP: 'Chose';
CHANGED_CAP: 'Changed';
AUTHORITY_CAP: 'Authority';
ATTACKED_CAP: 'Attacked';
ADD: 'Add';
ACTIVATING: 'Activating';
ACQUIRED: 'Acquired';
TURN: 'turn';
TO: 'to';
SELECTING: 'selecting';
IS: 'is';
FOR: 'for';
ENDS: 'ends';
CARDS: 'cards';
AND: 'and';

// All words not previously listed.
WORD: [a-zA-Z0-9_]+;

// Special words which won't be counted as words according to the grammar rule because it seems
// we don't need to take them into account when matching words.
CARDS2: 'card(s)';

UNKNOWN: .;
