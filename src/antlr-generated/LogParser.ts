// Generated from /Users/zebrckovic/Development-personal/star-realms-log-viewer/grammar/Log.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LogListener from "./LogListener.js";
import LogVisitor from "./LogVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LogParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly RESOLVING_DISCARD = 11;
	public static readonly REDRAW_UP_TO = 12;
	public static readonly SHUFFLED_DISCARD_PILE_TO_FORM_NEW_DECK = 13;
	public static readonly REVEALED_EVENT = 14;
	public static readonly REFRESH_ALLY_INDICATORS = 15;
	public static readonly PLAY_ALL = 16;
	public static readonly NEW_AUTHORITY = 17;
	public static readonly IT_IS_NOW = 18;
	public static readonly TO_THE_TOP_OF_THE_DECK = 19;
	public static readonly TO_ON_TABLE_IMAGE = 20;
	public static readonly TO_HAND = 21;
	public static readonly NO_MORE_CARDS_TO_DISCARD = 22;
	public static readonly IS_SCRAPPING = 23;
	public static readonly IS_RETURNING = 24;
	public static readonly IS_NOT_SCRAPPING_ANY_CARDS = 25;
	public static readonly IS_NOT_DISCARDING_ANY_CARDS = 26;
	public static readonly IS_DISCARDING = 27;
	public static readonly HAS_WON_THE_GAME = 28;
	public static readonly ENDS_TURN = 29;
	public static readonly ABILITY_AVAILABLE = 30;
	public static readonly NEWLINE = 31;
	public static readonly INDENT = 32;
	public static readonly SPACE = 33;
	public static readonly COLOR_OPEN = 34;
	public static readonly COLOR_CLOSE = 35;
	public static readonly NUM = 36;
	public static readonly TRADE_CAP = 37;
	public static readonly SCRAPPING_CAP = 38;
	public static readonly SCRAPPED_CAP = 39;
	public static readonly REVEALED_CAP = 40;
	public static readonly RESOLVING_CAP = 41;
	public static readonly PLAYED_CAP = 42;
	public static readonly DREW_CAP = 43;
	public static readonly DISCARDING_CAP = 44;
	public static readonly DISCARDED_CAP = 45;
	public static readonly DISCARD_CAP = 46;
	public static readonly DESTROYED_CAP = 47;
	public static readonly COMBAT_CAP = 48;
	public static readonly CHOSE_CAP = 49;
	public static readonly CHANGED_CAP = 50;
	public static readonly AUTHORITY_CAP = 51;
	public static readonly ATTACKED_CAP = 52;
	public static readonly ADD = 53;
	public static readonly ACTIVATING = 54;
	public static readonly ACQUIRED = 55;
	public static readonly TURN = 56;
	public static readonly TO = 57;
	public static readonly SELECTING = 58;
	public static readonly IS = 59;
	public static readonly FOR = 60;
	public static readonly ENDS = 61;
	public static readonly CARDS = 62;
	public static readonly AND = 63;
	public static readonly WORD = 64;
	public static readonly CARDS2 = 65;
	public static readonly UNKNOWN = 66;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_start = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_actionLine = 2;
	public static readonly RULE_action = 3;
	public static readonly RULE_playAllCardsAction = 4;
	public static readonly RULE_playOneCardAction = 5;
	public static readonly RULE_acquireCardAction = 6;
	public static readonly RULE_endTurnAction = 7;
	public static readonly RULE_attackPlayerAction = 8;
	public static readonly RULE_attackBaseAction = 9;
	public static readonly RULE_scrapSubjectCardAction = 10;
	public static readonly RULE_scrapObjectCardAction = 11;
	public static readonly RULE_noScrapObjectCardAction = 12;
	public static readonly RULE_discardCardAction = 13;
	public static readonly RULE_noDiscardCardAction = 14;
	public static readonly RULE_resolveDiscardAction = 15;
	public static readonly RULE_resolveDiscardAndRedrawAction = 16;
	public static readonly RULE_activateCardAction = 17;
	public static readonly RULE_choseAction = 18;
	public static readonly RULE_genericResolveAction = 19;
	public static readonly RULE_selectCardAction = 20;
	public static readonly RULE_returnCardAction = 21;
	public static readonly RULE_effectLine = 22;
	public static readonly RULE_effect = 23;
	public static readonly RULE_shuffledEffect = 24;
	public static readonly RULE_turnChangedEffect = 25;
	public static readonly RULE_cardToOwnerEffect = 26;
	public static readonly RULE_cardToOpponentEffect = 27;
	public static readonly RULE_sideEffect = 28;
	public static readonly RULE_drewCardsEffect = 29;
	public static readonly RULE_refreshedAllyIndicatorsEffect = 30;
	public static readonly RULE_scrappedCardEffect = 31;
	public static readonly RULE_noMoreCardsToDiscardEffect = 32;
	public static readonly RULE_discardedCardEffect = 33;
	public static readonly RULE_wonGameEffect = 34;
	public static readonly RULE_destroyedBaseEffect = 35;
	public static readonly RULE_revealedEventEffect = 36;
	public static readonly RULE_revealedEffect = 37;
	public static readonly RULE_acquiredToTheTopOfDeckEffect = 38;
	public static readonly RULE_acquiredToHandEffect = 39;
	public static readonly RULE_changedToOnTableImage = 40;
	public static readonly RULE_changedCardToCard = 41;
	public static readonly RULE_card = 42;
	public static readonly RULE_addTrade = 43;
	public static readonly RULE_addCombat = 44;
	public static readonly RULE_addAuthority = 45;
	public static readonly RULE_tradeChange = 46;
	public static readonly RULE_combatChange = 47;
	public static readonly RULE_authorityChange = 48;
	public static readonly RULE_discardChange = 49;
	public static readonly RULE_signedNum = 50;
	public static readonly RULE_word = 51;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "':'", "')'", 
                                                            "'.'", "''s'", 
                                                            "'>'", "'<'", 
                                                            "'-'", "'==='", 
                                                            "'+'", "'Resolving Discard'", 
                                                            "'Redraw up to'", 
                                                            "'Shuffled discard pile to form new deck'", 
                                                            "'Revealed event'", 
                                                            "'Refresh ally indicators'", 
                                                            "'Play all'", 
                                                            "'New Authority'", 
                                                            "'It is now'", 
                                                            "'to the top of the deck'", 
                                                            "'to on-table image'", 
                                                            "'to hand'", 
                                                            "'no more cards to discard'", 
                                                            "'is scrapping'", 
                                                            "'is returning'", 
                                                            "'is not scrapping any cards'", 
                                                            "'is not discarding any cards'", 
                                                            "'is discarding'", 
                                                            "'has won the game'", 
                                                            "'ends turn'", 
                                                            "'ability available'", 
                                                            null, "'        '", 
                                                            null, null, 
                                                            "'</color>'", 
                                                            null, "'Trade'", 
                                                            "'Scrapping'", 
                                                            "'Scrapped'", 
                                                            "'Revealed'", 
                                                            "'Resolving'", 
                                                            "'Played'", 
                                                            "'Drew'", "'Discarding'", 
                                                            "'Discarded'", 
                                                            "'Discard'", 
                                                            "'Destroyed'", 
                                                            "'Combat'", 
                                                            "'Chose'", "'Changed'", 
                                                            "'Authority'", 
                                                            "'Attacked'", 
                                                            "'Add'", "'Activating'", 
                                                            "'Acquired'", 
                                                            "'turn'", "'to'", 
                                                            "'selecting'", 
                                                            "'is'", "'for'", 
                                                            "'ends'", "'cards'", 
                                                            "'and'", null, 
                                                            "'card(s)'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "RESOLVING_DISCARD", 
                                                             "REDRAW_UP_TO", 
                                                             "SHUFFLED_DISCARD_PILE_TO_FORM_NEW_DECK", 
                                                             "REVEALED_EVENT", 
                                                             "REFRESH_ALLY_INDICATORS", 
                                                             "PLAY_ALL", 
                                                             "NEW_AUTHORITY", 
                                                             "IT_IS_NOW", 
                                                             "TO_THE_TOP_OF_THE_DECK", 
                                                             "TO_ON_TABLE_IMAGE", 
                                                             "TO_HAND", 
                                                             "NO_MORE_CARDS_TO_DISCARD", 
                                                             "IS_SCRAPPING", 
                                                             "IS_RETURNING", 
                                                             "IS_NOT_SCRAPPING_ANY_CARDS", 
                                                             "IS_NOT_DISCARDING_ANY_CARDS", 
                                                             "IS_DISCARDING", 
                                                             "HAS_WON_THE_GAME", 
                                                             "ENDS_TURN", 
                                                             "ABILITY_AVAILABLE", 
                                                             "NEWLINE", 
                                                             "INDENT", "SPACE", 
                                                             "COLOR_OPEN", 
                                                             "COLOR_CLOSE", 
                                                             "NUM", "TRADE_CAP", 
                                                             "SCRAPPING_CAP", 
                                                             "SCRAPPED_CAP", 
                                                             "REVEALED_CAP", 
                                                             "RESOLVING_CAP", 
                                                             "PLAYED_CAP", 
                                                             "DREW_CAP", 
                                                             "DISCARDING_CAP", 
                                                             "DISCARDED_CAP", 
                                                             "DISCARD_CAP", 
                                                             "DESTROYED_CAP", 
                                                             "COMBAT_CAP", 
                                                             "CHOSE_CAP", 
                                                             "CHANGED_CAP", 
                                                             "AUTHORITY_CAP", 
                                                             "ATTACKED_CAP", 
                                                             "ADD", "ACTIVATING", 
                                                             "ACQUIRED", 
                                                             "TURN", "TO", 
                                                             "SELECTING", 
                                                             "IS", "FOR", 
                                                             "ENDS", "CARDS", 
                                                             "AND", "WORD", 
                                                             "CARDS2", "UNKNOWN" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "line", "actionLine", "action", "playAllCardsAction", "playOneCardAction", 
		"acquireCardAction", "endTurnAction", "attackPlayerAction", "attackBaseAction", 
		"scrapSubjectCardAction", "scrapObjectCardAction", "noScrapObjectCardAction", 
		"discardCardAction", "noDiscardCardAction", "resolveDiscardAction", "resolveDiscardAndRedrawAction", 
		"activateCardAction", "choseAction", "genericResolveAction", "selectCardAction", 
		"returnCardAction", "effectLine", "effect", "shuffledEffect", "turnChangedEffect", 
		"cardToOwnerEffect", "cardToOpponentEffect", "sideEffect", "drewCardsEffect", 
		"refreshedAllyIndicatorsEffect", "scrappedCardEffect", "noMoreCardsToDiscardEffect", 
		"discardedCardEffect", "wonGameEffect", "destroyedBaseEffect", "revealedEventEffect", 
		"revealedEffect", "acquiredToTheTopOfDeckEffect", "acquiredToHandEffect", 
		"changedToOnTableImage", "changedCardToCard", "card", "addTrade", "addCombat", 
		"addAuthority", "tradeChange", "combatChange", "authorityChange", "discardChange", 
		"signedNum", "word",
	];
	public get grammarFileName(): string { return "Log.g4"; }
	public get literalNames(): (string | null)[] { return LogParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LogParser.symbolicNames; }
	public get ruleNames(): string[] { return LogParser.ruleNames; }
	public get serializedATN(): number[] { return LogParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LogParser._ATN, LogParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let localctx: StartContext = new StartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LogParser.RULE_start);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 104;
					this.match(LogParser.NEWLINE);
					}
					}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 4229955617) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 4194303) !== 0)) {
				{
				{
				this.state = 110;
				localctx._line = this.line();
				localctx._lines.push(localctx._line);
				}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 116;
				this.match(LogParser.NEWLINE);
				}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let localctx: LineContext = new LineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LogParser.RULE_line);
		try {
			this.state = 124;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
			case 16:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 122;
				this.actionLine();
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 123;
				this.effectLine();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public actionLine(): ActionLineContext {
		let localctx: ActionLineContext = new ActionLineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LogParser.RULE_actionLine);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.action();
			this.state = 127;
			this.match(LogParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public action(): ActionContext {
		let localctx: ActionContext = new ActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LogParser.RULE_action);
		try {
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 129;
				this.playAllCardsAction();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 130;
				this.playOneCardAction();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 131;
				this.acquireCardAction();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 132;
				this.endTurnAction();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 133;
				this.attackPlayerAction();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 134;
				this.attackBaseAction();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 135;
				this.scrapSubjectCardAction();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 136;
				this.scrapObjectCardAction();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 137;
				this.noScrapObjectCardAction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 138;
				this.discardCardAction();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 139;
				this.noDiscardCardAction();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 140;
				this.resolveDiscardAction();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 141;
				this.resolveDiscardAndRedrawAction();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 142;
				this.activateCardAction();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 143;
				this.choseAction();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 144;
				this.genericResolveAction();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 145;
				this.selectCardAction();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 146;
				this.returnCardAction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public playAllCardsAction(): PlayAllCardsActionContext {
		let localctx: PlayAllCardsActionContext = new PlayAllCardsActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LogParser.RULE_playAllCardsAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 149;
			this.match(LogParser.PLAY_ALL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public playOneCardAction(): PlayOneCardActionContext {
		let localctx: PlayOneCardActionContext = new PlayOneCardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LogParser.RULE_playOneCardAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			this.match(LogParser.PLAYED_CAP);
			this.state = 152;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public acquireCardAction(): AcquireCardActionContext {
		let localctx: AcquireCardActionContext = new AcquireCardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LogParser.RULE_acquireCardAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 154;
			this.match(LogParser.ACQUIRED);
			this.state = 155;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public endTurnAction(): EndTurnActionContext {
		let localctx: EndTurnActionContext = new EndTurnActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LogParser.RULE_endTurnAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 157;
			localctx._player = this.word();
			this.state = 158;
			this.match(LogParser.ENDS_TURN);
			this.state = 159;
			localctx._turn = this.match(LogParser.NUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attackPlayerAction(): AttackPlayerActionContext {
		let localctx: AttackPlayerActionContext = new AttackPlayerActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LogParser.RULE_attackPlayerAction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 161;
			this.match(LogParser.ATTACKED_CAP);
			this.state = 162;
			localctx._targetPlayer = this.word();
			this.state = 163;
			this.match(LogParser.FOR);
			this.state = 164;
			localctx._damage = this.match(LogParser.NUM);
			this.state = 165;
			this.match(LogParser.T__0);
			this.state = 166;
			this.match(LogParser.NEW_AUTHORITY);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 167;
				this.match(LogParser.T__1);
				}
			}

			this.state = 170;
			this.signedNum();
			this.state = 171;
			this.match(LogParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attackBaseAction(): AttackBaseActionContext {
		let localctx: AttackBaseActionContext = new AttackBaseActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LogParser.RULE_attackBaseAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 173;
			this.match(LogParser.ATTACKED_CAP);
			this.state = 174;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scrapSubjectCardAction(): ScrapSubjectCardActionContext {
		let localctx: ScrapSubjectCardActionContext = new ScrapSubjectCardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LogParser.RULE_scrapSubjectCardAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			this.match(LogParser.SCRAPPING_CAP);
			this.state = 177;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scrapObjectCardAction(): ScrapObjectCardActionContext {
		let localctx: ScrapObjectCardActionContext = new ScrapObjectCardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LogParser.RULE_scrapObjectCardAction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			localctx._player = this.word();
			this.state = 180;
			this.match(LogParser.IS_SCRAPPING);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 181;
				this.match(LogParser.T__1);
				}
			}

			this.state = 184;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public noScrapObjectCardAction(): NoScrapObjectCardActionContext {
		let localctx: NoScrapObjectCardActionContext = new NoScrapObjectCardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LogParser.RULE_noScrapObjectCardAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 186;
			localctx._player = this.word();
			this.state = 187;
			this.match(LogParser.IS_NOT_SCRAPPING_ANY_CARDS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public discardCardAction(): DiscardCardActionContext {
		let localctx: DiscardCardActionContext = new DiscardCardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LogParser.RULE_discardCardAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 189;
			localctx._player = this.word();
			this.state = 190;
			this.match(LogParser.IS_DISCARDING);
			this.state = 191;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public noDiscardCardAction(): NoDiscardCardActionContext {
		let localctx: NoDiscardCardActionContext = new NoDiscardCardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LogParser.RULE_noDiscardCardAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 193;
			localctx._player = this.word();
			this.state = 194;
			this.match(LogParser.IS_NOT_DISCARDING_ANY_CARDS);
			this.state = 195;
			this.match(LogParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resolveDiscardAction(): ResolveDiscardActionContext {
		let localctx: ResolveDiscardActionContext = new ResolveDiscardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, LogParser.RULE_resolveDiscardAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this.match(LogParser.RESOLVING_DISCARD);
			this.state = 198;
			localctx._cards = this.match(LogParser.NUM);
			this.state = 199;
			this.match(LogParser.CARDS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resolveDiscardAndRedrawAction(): ResolveDiscardAndRedrawActionContext {
		let localctx: ResolveDiscardAndRedrawActionContext = new ResolveDiscardAndRedrawActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LogParser.RULE_resolveDiscardAndRedrawAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 201;
			this.match(LogParser.RESOLVING_DISCARD);
			this.state = 202;
			this.match(LogParser.AND);
			this.state = 203;
			this.match(LogParser.REDRAW_UP_TO);
			this.state = 204;
			localctx._cards = this.match(LogParser.NUM);
			this.state = 205;
			this.match(LogParser.CARDS2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public activateCardAction(): ActivateCardActionContext {
		let localctx: ActivateCardActionContext = new ActivateCardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, LogParser.RULE_activateCardAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 207;
			this.match(LogParser.ACTIVATING);
			this.state = 208;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choseAction(): ChoseActionContext {
		let localctx: ChoseActionContext = new ChoseActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LogParser.RULE_choseAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.match(LogParser.CHOSE_CAP);
			this.state = 214;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 211;
				this.addTrade();
				}
				break;
			case 2:
				{
				this.state = 212;
				this.addCombat();
				}
				break;
			case 3:
				{
				this.state = 213;
				this.addAuthority();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public genericResolveAction(): GenericResolveActionContext {
		let localctx: GenericResolveActionContext = new GenericResolveActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LogParser.RULE_genericResolveAction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 216;
			this.match(LogParser.RESOLVING_CAP);
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 536870911) !== 0)) {
				{
				this.state = 219;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
					{
					this.state = 217;
					this.word();
					}
					break;
				case 36:
					{
					this.state = 218;
					this.match(LogParser.NUM);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectCardAction(): SelectCardActionContext {
		let localctx: SelectCardActionContext = new SelectCardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LogParser.RULE_selectCardAction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 224;
			localctx._player = this.word();
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 225;
				this.match(LogParser.IS);
				}
			}

			this.state = 228;
			this.match(LogParser.SELECTING);
			this.state = 229;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnCardAction(): ReturnCardActionContext {
		let localctx: ReturnCardActionContext = new ReturnCardActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, LogParser.RULE_returnCardAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			localctx._player = this.word();
			this.state = 232;
			this.match(LogParser.IS_RETURNING);
			this.state = 233;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public effectLine(): EffectLineContext {
		let localctx: EffectLineContext = new EffectLineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, LogParser.RULE_effectLine);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 235;
			this.match(LogParser.INDENT);
			this.state = 236;
			this.effect();
			this.state = 237;
			this.match(LogParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public effect(): EffectContext {
		let localctx: EffectContext = new EffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, LogParser.RULE_effect);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 239;
				this.shuffledEffect();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 240;
				this.turnChangedEffect();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 241;
				this.cardToOwnerEffect();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 242;
				this.cardToOpponentEffect();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 243;
				this.sideEffect();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 244;
				this.drewCardsEffect();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 245;
				this.refreshedAllyIndicatorsEffect();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 246;
				this.scrappedCardEffect();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 247;
				this.noMoreCardsToDiscardEffect();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 248;
				this.discardedCardEffect();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 249;
				this.wonGameEffect();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 250;
				this.destroyedBaseEffect();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 251;
				this.revealedEventEffect();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 252;
				this.revealedEffect();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 253;
				this.acquiredToTheTopOfDeckEffect();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 254;
				this.acquiredToHandEffect();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 255;
				this.changedToOnTableImage();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 256;
				this.changedCardToCard();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public shuffledEffect(): ShuffledEffectContext {
		let localctx: ShuffledEffectContext = new ShuffledEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, LogParser.RULE_shuffledEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 259;
			this.match(LogParser.SHUFFLED_DISCARD_PILE_TO_FORM_NEW_DECK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public turnChangedEffect(): TurnChangedEffectContext {
		let localctx: TurnChangedEffectContext = new TurnChangedEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LogParser.RULE_turnChangedEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this.match(LogParser.IT_IS_NOW);
			this.state = 262;
			localctx._player = this.word();
			this.state = 263;
			this.match(LogParser.T__4);
			this.state = 264;
			this.match(LogParser.TURN);
			this.state = 265;
			localctx._turn = this.match(LogParser.NUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cardToOwnerEffect(): CardToOwnerEffectContext {
		let localctx: CardToOwnerEffectContext = new CardToOwnerEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LogParser.RULE_cardToOwnerEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 267;
			localctx._player = this.word();
			this.state = 268;
			this.match(LogParser.T__5);
			this.state = 269;
			this.card();
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 270;
				this.tradeChange();
				}
				break;
			case 2:
				{
				this.state = 271;
				this.combatChange();
				}
				break;
			case 3:
				{
				this.state = 272;
				this.authorityChange();
				}
				break;
			case 4:
				{
				this.state = 273;
				localctx._ability = this.match(LogParser.ABILITY_AVAILABLE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cardToOpponentEffect(): CardToOpponentEffectContext {
		let localctx: CardToOpponentEffectContext = new CardToOpponentEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, LogParser.RULE_cardToOpponentEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 276;
			localctx._player = this.word();
			this.state = 277;
			this.match(LogParser.T__6);
			this.state = 278;
			this.card();
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 279;
				this.discardChange();
				}
				break;
			case 2:
				{
				this.state = 280;
				this.authorityChange();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sideEffect(): SideEffectContext {
		let localctx: SideEffectContext = new SideEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, LogParser.RULE_sideEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 283;
			localctx._player = this.word();
			this.state = 284;
			this.match(LogParser.T__7);
			this.state = 289;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 285;
				this.tradeChange();
				}
				break;
			case 2:
				{
				this.state = 286;
				this.combatChange();
				}
				break;
			case 3:
				{
				this.state = 287;
				this.authorityChange();
				}
				break;
			case 4:
				{
				this.state = 288;
				this.discardChange();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public drewCardsEffect(): DrewCardsEffectContext {
		let localctx: DrewCardsEffectContext = new DrewCardsEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, LogParser.RULE_drewCardsEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 291;
			this.match(LogParser.DREW_CAP);
			this.state = 292;
			localctx._cards = this.match(LogParser.NUM);
			this.state = 293;
			this.match(LogParser.CARDS);
			this.state = 294;
			this.match(LogParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public refreshedAllyIndicatorsEffect(): RefreshedAllyIndicatorsEffectContext {
		let localctx: RefreshedAllyIndicatorsEffectContext = new RefreshedAllyIndicatorsEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, LogParser.RULE_refreshedAllyIndicatorsEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 296;
			this.match(LogParser.REFRESH_ALLY_INDICATORS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scrappedCardEffect(): ScrappedCardEffectContext {
		let localctx: ScrappedCardEffectContext = new ScrappedCardEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, LogParser.RULE_scrappedCardEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
			this.match(LogParser.SCRAPPED_CAP);
			this.state = 299;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public noMoreCardsToDiscardEffect(): NoMoreCardsToDiscardEffectContext {
		let localctx: NoMoreCardsToDiscardEffectContext = new NoMoreCardsToDiscardEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, LogParser.RULE_noMoreCardsToDiscardEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 301;
			this.match(LogParser.NO_MORE_CARDS_TO_DISCARD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public discardedCardEffect(): DiscardedCardEffectContext {
		let localctx: DiscardedCardEffectContext = new DiscardedCardEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, LogParser.RULE_discardedCardEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 303;
			this.match(LogParser.DISCARDED_CAP);
			this.state = 304;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wonGameEffect(): WonGameEffectContext {
		let localctx: WonGameEffectContext = new WonGameEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, LogParser.RULE_wonGameEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 306;
			this.match(LogParser.T__8);
			this.state = 307;
			localctx._player = this.word();
			this.state = 308;
			this.match(LogParser.HAS_WON_THE_GAME);
			this.state = 309;
			this.match(LogParser.T__3);
			this.state = 310;
			this.match(LogParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public destroyedBaseEffect(): DestroyedBaseEffectContext {
		let localctx: DestroyedBaseEffectContext = new DestroyedBaseEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, LogParser.RULE_destroyedBaseEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 312;
			this.match(LogParser.DESTROYED_CAP);
			this.state = 313;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public revealedEventEffect(): RevealedEventEffectContext {
		let localctx: RevealedEventEffectContext = new RevealedEventEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, LogParser.RULE_revealedEventEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
			this.match(LogParser.REVEALED_EVENT);
			this.state = 316;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public revealedEffect(): RevealedEffectContext {
		let localctx: RevealedEffectContext = new RevealedEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, LogParser.RULE_revealedEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 318;
			this.match(LogParser.REVEALED_CAP);
			this.state = 319;
			this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public acquiredToTheTopOfDeckEffect(): AcquiredToTheTopOfDeckEffectContext {
		let localctx: AcquiredToTheTopOfDeckEffectContext = new AcquiredToTheTopOfDeckEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, LogParser.RULE_acquiredToTheTopOfDeckEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 321;
			this.match(LogParser.ACQUIRED);
			this.state = 322;
			this.card();
			this.state = 323;
			this.match(LogParser.TO_THE_TOP_OF_THE_DECK);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 324;
				this.match(LogParser.T__3);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public acquiredToHandEffect(): AcquiredToHandEffectContext {
		let localctx: AcquiredToHandEffectContext = new AcquiredToHandEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, LogParser.RULE_acquiredToHandEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 327;
			this.match(LogParser.ACQUIRED);
			this.state = 328;
			this.card();
			this.state = 329;
			this.match(LogParser.TO_HAND);
			this.state = 330;
			this.match(LogParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public changedToOnTableImage(): ChangedToOnTableImageContext {
		let localctx: ChangedToOnTableImageContext = new ChangedToOnTableImageContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, LogParser.RULE_changedToOnTableImage);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 332;
			this.match(LogParser.CHANGED_CAP);
			this.state = 333;
			this.card();
			this.state = 334;
			this.match(LogParser.TO_ON_TABLE_IMAGE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public changedCardToCard(): ChangedCardToCardContext {
		let localctx: ChangedCardToCardContext = new ChangedCardToCardContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, LogParser.RULE_changedCardToCard);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 336;
			this.match(LogParser.CHANGED_CAP);
			this.state = 337;
			localctx._fromCard = this.card();
			this.state = 338;
			this.match(LogParser.TO);
			this.state = 339;
			localctx._toCard = this.card();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public card(): CardContext {
		let localctx: CardContext = new CardContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, LogParser.RULE_card);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 342;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 341;
					localctx._word = this.word();
					localctx._name.push(localctx._word);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 344;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addTrade(): AddTradeContext {
		let localctx: AddTradeContext = new AddTradeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, LogParser.RULE_addTrade);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 346;
			this.match(LogParser.ADD);
			this.state = 347;
			localctx._amount = this.match(LogParser.NUM);
			this.state = 348;
			this.match(LogParser.TRADE_CAP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addCombat(): AddCombatContext {
		let localctx: AddCombatContext = new AddCombatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, LogParser.RULE_addCombat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this.match(LogParser.ADD);
			this.state = 351;
			localctx._amount = this.match(LogParser.NUM);
			this.state = 352;
			this.match(LogParser.COMBAT_CAP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addAuthority(): AddAuthorityContext {
		let localctx: AddAuthorityContext = new AddAuthorityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, LogParser.RULE_addAuthority);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 354;
			this.match(LogParser.ADD);
			this.state = 355;
			localctx._amount = this.match(LogParser.NUM);
			this.state = 356;
			this.match(LogParser.AUTHORITY_CAP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tradeChange(): TradeChangeContext {
		let localctx: TradeChangeContext = new TradeChangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, LogParser.RULE_tradeChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			localctx._change = this.signedNum();
			this.state = 359;
			this.match(LogParser.TRADE_CAP);
			this.state = 360;
			this.match(LogParser.T__0);
			this.state = 361;
			this.match(LogParser.TRADE_CAP);
			this.state = 362;
			this.match(LogParser.T__1);
			this.state = 363;
			localctx._final = this.signedNum();
			this.state = 364;
			this.match(LogParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public combatChange(): CombatChangeContext {
		let localctx: CombatChangeContext = new CombatChangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, LogParser.RULE_combatChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 366;
			localctx._change = this.signedNum();
			this.state = 367;
			this.match(LogParser.COMBAT_CAP);
			this.state = 368;
			this.match(LogParser.T__0);
			this.state = 369;
			this.match(LogParser.COMBAT_CAP);
			this.state = 370;
			this.match(LogParser.T__1);
			this.state = 371;
			localctx._final = this.signedNum();
			this.state = 372;
			this.match(LogParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public authorityChange(): AuthorityChangeContext {
		let localctx: AuthorityChangeContext = new AuthorityChangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, LogParser.RULE_authorityChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 374;
			localctx._change = this.signedNum();
			this.state = 375;
			this.match(LogParser.AUTHORITY_CAP);
			this.state = 376;
			this.match(LogParser.T__0);
			this.state = 377;
			this.match(LogParser.AUTHORITY_CAP);
			this.state = 378;
			this.match(LogParser.T__1);
			this.state = 379;
			localctx._final = this.signedNum();
			this.state = 380;
			this.match(LogParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public discardChange(): DiscardChangeContext {
		let localctx: DiscardChangeContext = new DiscardChangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, LogParser.RULE_discardChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 382;
			localctx._change = this.signedNum();
			this.state = 383;
			this.match(LogParser.DISCARD_CAP);
			this.state = 384;
			this.match(LogParser.T__0);
			this.state = 385;
			this.match(LogParser.DISCARDING_CAP);
			this.state = 386;
			this.match(LogParser.T__1);
			this.state = 387;
			localctx._final = this.signedNum();
			this.state = 388;
			this.match(LogParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public signedNum(): SignedNumContext {
		let localctx: SignedNumContext = new SignedNumContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, LogParser.RULE_signedNum);
		try {
			this.state = 395;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 390;
				localctx._sign = this.match(LogParser.T__7);
				this.state = 391;
				this.match(LogParser.NUM);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 392;
				localctx._sign = this.match(LogParser.T__9);
				this.state = 393;
				this.match(LogParser.NUM);
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 394;
				this.match(LogParser.NUM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public word(): WordContext {
		let localctx: WordContext = new WordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, LogParser.RULE_word);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 397;
			_la = this._input.LA(1);
			if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 268435455) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,66,400,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,1,0,5,0,106,8,0,
	10,0,12,0,109,9,0,1,0,5,0,112,8,0,10,0,12,0,115,9,0,1,0,5,0,118,8,0,10,
	0,12,0,121,9,0,1,1,1,1,3,1,125,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,148,8,3,1,4,1,4,1,5,
	1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,169,
	8,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,3,11,183,8,11,
	1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,
	15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,
	1,18,3,18,215,8,18,1,19,1,19,1,19,5,19,220,8,19,10,19,12,19,223,9,19,1,
	20,1,20,3,20,227,8,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,
	1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
	23,1,23,1,23,1,23,1,23,3,23,258,8,23,1,24,1,24,1,25,1,25,1,25,1,25,1,25,
	1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,275,8,26,1,27,1,27,1,27,1,
	27,1,27,3,27,282,8,27,1,28,1,28,1,28,1,28,1,28,1,28,3,28,290,8,28,1,29,
	1,29,1,29,1,29,1,29,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,33,1,33,1,33,1,
	34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,37,
	1,38,1,38,1,38,1,38,3,38,326,8,38,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,
	40,1,40,1,41,1,41,1,41,1,41,1,41,1,42,4,42,343,8,42,11,42,12,42,344,1,43,
	1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,
	46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,
	1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	50,1,50,1,50,1,50,1,50,3,50,396,8,50,1,51,1,51,1,51,0,0,52,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
	60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,0,1,
	1,0,37,64,403,0,107,1,0,0,0,2,124,1,0,0,0,4,126,1,0,0,0,6,147,1,0,0,0,8,
	149,1,0,0,0,10,151,1,0,0,0,12,154,1,0,0,0,14,157,1,0,0,0,16,161,1,0,0,0,
	18,173,1,0,0,0,20,176,1,0,0,0,22,179,1,0,0,0,24,186,1,0,0,0,26,189,1,0,
	0,0,28,193,1,0,0,0,30,197,1,0,0,0,32,201,1,0,0,0,34,207,1,0,0,0,36,210,
	1,0,0,0,38,216,1,0,0,0,40,224,1,0,0,0,42,231,1,0,0,0,44,235,1,0,0,0,46,
	257,1,0,0,0,48,259,1,0,0,0,50,261,1,0,0,0,52,267,1,0,0,0,54,276,1,0,0,0,
	56,283,1,0,0,0,58,291,1,0,0,0,60,296,1,0,0,0,62,298,1,0,0,0,64,301,1,0,
	0,0,66,303,1,0,0,0,68,306,1,0,0,0,70,312,1,0,0,0,72,315,1,0,0,0,74,318,
	1,0,0,0,76,321,1,0,0,0,78,327,1,0,0,0,80,332,1,0,0,0,82,336,1,0,0,0,84,
	342,1,0,0,0,86,346,1,0,0,0,88,350,1,0,0,0,90,354,1,0,0,0,92,358,1,0,0,0,
	94,366,1,0,0,0,96,374,1,0,0,0,98,382,1,0,0,0,100,395,1,0,0,0,102,397,1,
	0,0,0,104,106,5,31,0,0,105,104,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,
	107,108,1,0,0,0,108,113,1,0,0,0,109,107,1,0,0,0,110,112,3,2,1,0,111,110,
	1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,119,1,0,0,0,
	115,113,1,0,0,0,116,118,5,31,0,0,117,116,1,0,0,0,118,121,1,0,0,0,119,117,
	1,0,0,0,119,120,1,0,0,0,120,1,1,0,0,0,121,119,1,0,0,0,122,125,3,4,2,0,123,
	125,3,44,22,0,124,122,1,0,0,0,124,123,1,0,0,0,125,3,1,0,0,0,126,127,3,6,
	3,0,127,128,5,31,0,0,128,5,1,0,0,0,129,148,3,8,4,0,130,148,3,10,5,0,131,
	148,3,12,6,0,132,148,3,14,7,0,133,148,3,16,8,0,134,148,3,18,9,0,135,148,
	3,20,10,0,136,148,3,22,11,0,137,148,3,24,12,0,138,148,3,26,13,0,139,148,
	3,28,14,0,140,148,3,30,15,0,141,148,3,32,16,0,142,148,3,34,17,0,143,148,
	3,36,18,0,144,148,3,38,19,0,145,148,3,40,20,0,146,148,3,42,21,0,147,129,
	1,0,0,0,147,130,1,0,0,0,147,131,1,0,0,0,147,132,1,0,0,0,147,133,1,0,0,0,
	147,134,1,0,0,0,147,135,1,0,0,0,147,136,1,0,0,0,147,137,1,0,0,0,147,138,
	1,0,0,0,147,139,1,0,0,0,147,140,1,0,0,0,147,141,1,0,0,0,147,142,1,0,0,0,
	147,143,1,0,0,0,147,144,1,0,0,0,147,145,1,0,0,0,147,146,1,0,0,0,148,7,1,
	0,0,0,149,150,5,16,0,0,150,9,1,0,0,0,151,152,5,42,0,0,152,153,3,84,42,0,
	153,11,1,0,0,0,154,155,5,55,0,0,155,156,3,84,42,0,156,13,1,0,0,0,157,158,
	3,102,51,0,158,159,5,29,0,0,159,160,5,36,0,0,160,15,1,0,0,0,161,162,5,52,
	0,0,162,163,3,102,51,0,163,164,5,60,0,0,164,165,5,36,0,0,165,166,5,1,0,
	0,166,168,5,17,0,0,167,169,5,2,0,0,168,167,1,0,0,0,168,169,1,0,0,0,169,
	170,1,0,0,0,170,171,3,100,50,0,171,172,5,3,0,0,172,17,1,0,0,0,173,174,5,
	52,0,0,174,175,3,84,42,0,175,19,1,0,0,0,176,177,5,38,0,0,177,178,3,84,42,
	0,178,21,1,0,0,0,179,180,3,102,51,0,180,182,5,23,0,0,181,183,5,2,0,0,182,
	181,1,0,0,0,182,183,1,0,0,0,183,184,1,0,0,0,184,185,3,84,42,0,185,23,1,
	0,0,0,186,187,3,102,51,0,187,188,5,25,0,0,188,25,1,0,0,0,189,190,3,102,
	51,0,190,191,5,27,0,0,191,192,3,84,42,0,192,27,1,0,0,0,193,194,3,102,51,
	0,194,195,5,26,0,0,195,196,5,4,0,0,196,29,1,0,0,0,197,198,5,11,0,0,198,
	199,5,36,0,0,199,200,5,62,0,0,200,31,1,0,0,0,201,202,5,11,0,0,202,203,5,
	63,0,0,203,204,5,12,0,0,204,205,5,36,0,0,205,206,5,65,0,0,206,33,1,0,0,
	0,207,208,5,54,0,0,208,209,3,84,42,0,209,35,1,0,0,0,210,214,5,49,0,0,211,
	215,3,86,43,0,212,215,3,88,44,0,213,215,3,90,45,0,214,211,1,0,0,0,214,212,
	1,0,0,0,214,213,1,0,0,0,215,37,1,0,0,0,216,221,5,41,0,0,217,220,3,102,51,
	0,218,220,5,36,0,0,219,217,1,0,0,0,219,218,1,0,0,0,220,223,1,0,0,0,221,
	219,1,0,0,0,221,222,1,0,0,0,222,39,1,0,0,0,223,221,1,0,0,0,224,226,3,102,
	51,0,225,227,5,59,0,0,226,225,1,0,0,0,226,227,1,0,0,0,227,228,1,0,0,0,228,
	229,5,58,0,0,229,230,3,84,42,0,230,41,1,0,0,0,231,232,3,102,51,0,232,233,
	5,24,0,0,233,234,3,84,42,0,234,43,1,0,0,0,235,236,5,32,0,0,236,237,3,46,
	23,0,237,238,5,31,0,0,238,45,1,0,0,0,239,258,3,48,24,0,240,258,3,50,25,
	0,241,258,3,52,26,0,242,258,3,54,27,0,243,258,3,56,28,0,244,258,3,58,29,
	0,245,258,3,60,30,0,246,258,3,62,31,0,247,258,3,64,32,0,248,258,3,66,33,
	0,249,258,3,68,34,0,250,258,3,70,35,0,251,258,3,72,36,0,252,258,3,74,37,
	0,253,258,3,76,38,0,254,258,3,78,39,0,255,258,3,80,40,0,256,258,3,82,41,
	0,257,239,1,0,0,0,257,240,1,0,0,0,257,241,1,0,0,0,257,242,1,0,0,0,257,243,
	1,0,0,0,257,244,1,0,0,0,257,245,1,0,0,0,257,246,1,0,0,0,257,247,1,0,0,0,
	257,248,1,0,0,0,257,249,1,0,0,0,257,250,1,0,0,0,257,251,1,0,0,0,257,252,
	1,0,0,0,257,253,1,0,0,0,257,254,1,0,0,0,257,255,1,0,0,0,257,256,1,0,0,0,
	258,47,1,0,0,0,259,260,5,13,0,0,260,49,1,0,0,0,261,262,5,18,0,0,262,263,
	3,102,51,0,263,264,5,5,0,0,264,265,5,56,0,0,265,266,5,36,0,0,266,51,1,0,
	0,0,267,268,3,102,51,0,268,269,5,6,0,0,269,274,3,84,42,0,270,275,3,92,46,
	0,271,275,3,94,47,0,272,275,3,96,48,0,273,275,5,30,0,0,274,270,1,0,0,0,
	274,271,1,0,0,0,274,272,1,0,0,0,274,273,1,0,0,0,275,53,1,0,0,0,276,277,
	3,102,51,0,277,278,5,7,0,0,278,281,3,84,42,0,279,282,3,98,49,0,280,282,
	3,96,48,0,281,279,1,0,0,0,281,280,1,0,0,0,282,55,1,0,0,0,283,284,3,102,
	51,0,284,289,5,8,0,0,285,290,3,92,46,0,286,290,3,94,47,0,287,290,3,96,48,
	0,288,290,3,98,49,0,289,285,1,0,0,0,289,286,1,0,0,0,289,287,1,0,0,0,289,
	288,1,0,0,0,290,57,1,0,0,0,291,292,5,43,0,0,292,293,5,36,0,0,293,294,5,
	62,0,0,294,295,5,4,0,0,295,59,1,0,0,0,296,297,5,15,0,0,297,61,1,0,0,0,298,
	299,5,39,0,0,299,300,3,84,42,0,300,63,1,0,0,0,301,302,5,22,0,0,302,65,1,
	0,0,0,303,304,5,45,0,0,304,305,3,84,42,0,305,67,1,0,0,0,306,307,5,9,0,0,
	307,308,3,102,51,0,308,309,5,28,0,0,309,310,5,4,0,0,310,311,5,9,0,0,311,
	69,1,0,0,0,312,313,5,47,0,0,313,314,3,84,42,0,314,71,1,0,0,0,315,316,5,
	14,0,0,316,317,3,84,42,0,317,73,1,0,0,0,318,319,5,40,0,0,319,320,3,84,42,
	0,320,75,1,0,0,0,321,322,5,55,0,0,322,323,3,84,42,0,323,325,5,19,0,0,324,
	326,5,4,0,0,325,324,1,0,0,0,325,326,1,0,0,0,326,77,1,0,0,0,327,328,5,55,
	0,0,328,329,3,84,42,0,329,330,5,21,0,0,330,331,5,4,0,0,331,79,1,0,0,0,332,
	333,5,50,0,0,333,334,3,84,42,0,334,335,5,20,0,0,335,81,1,0,0,0,336,337,
	5,50,0,0,337,338,3,84,42,0,338,339,5,57,0,0,339,340,3,84,42,0,340,83,1,
	0,0,0,341,343,3,102,51,0,342,341,1,0,0,0,343,344,1,0,0,0,344,342,1,0,0,
	0,344,345,1,0,0,0,345,85,1,0,0,0,346,347,5,53,0,0,347,348,5,36,0,0,348,
	349,5,37,0,0,349,87,1,0,0,0,350,351,5,53,0,0,351,352,5,36,0,0,352,353,5,
	48,0,0,353,89,1,0,0,0,354,355,5,53,0,0,355,356,5,36,0,0,356,357,5,51,0,
	0,357,91,1,0,0,0,358,359,3,100,50,0,359,360,5,37,0,0,360,361,5,1,0,0,361,
	362,5,37,0,0,362,363,5,2,0,0,363,364,3,100,50,0,364,365,5,3,0,0,365,93,
	1,0,0,0,366,367,3,100,50,0,367,368,5,48,0,0,368,369,5,1,0,0,369,370,5,48,
	0,0,370,371,5,2,0,0,371,372,3,100,50,0,372,373,5,3,0,0,373,95,1,0,0,0,374,
	375,3,100,50,0,375,376,5,51,0,0,376,377,5,1,0,0,377,378,5,51,0,0,378,379,
	5,2,0,0,379,380,3,100,50,0,380,381,5,3,0,0,381,97,1,0,0,0,382,383,3,100,
	50,0,383,384,5,46,0,0,384,385,5,1,0,0,385,386,5,44,0,0,386,387,5,2,0,0,
	387,388,3,100,50,0,388,389,5,3,0,0,389,99,1,0,0,0,390,391,5,8,0,0,391,396,
	5,36,0,0,392,393,5,10,0,0,393,396,5,36,0,0,394,396,5,36,0,0,395,390,1,0,
	0,0,395,392,1,0,0,0,395,394,1,0,0,0,396,101,1,0,0,0,397,398,7,0,0,0,398,
	103,1,0,0,0,18,107,113,119,124,147,168,182,214,219,221,226,257,274,281,
	289,325,344,395];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LogParser.__ATN) {
			LogParser.__ATN = new ATNDeserializer().deserialize(LogParser._serializedATN);
		}

		return LogParser.__ATN;
	}


	static DecisionsToDFA = LogParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StartContext extends ParserRuleContext {
	public _line!: LineContext;
	public _lines: LineContext[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(LogParser.NEWLINE, i);
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_start;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterStart) {
	 		listener.enterStart(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitStart) {
	 		listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public actionLine(): ActionLineContext {
		return this.getTypedRuleContext(ActionLineContext, 0) as ActionLineContext;
	}
	public effectLine(): EffectLineContext {
		return this.getTypedRuleContext(EffectLineContext, 0) as EffectLineContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_line;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterLine) {
	 		listener.enterLine(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitLine) {
	 		listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionLineContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public action(): ActionContext {
		return this.getTypedRuleContext(ActionContext, 0) as ActionContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(LogParser.NEWLINE, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_actionLine;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterActionLine) {
	 		listener.enterActionLine(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitActionLine) {
	 		listener.exitActionLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitActionLine) {
			return visitor.visitActionLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public playAllCardsAction(): PlayAllCardsActionContext {
		return this.getTypedRuleContext(PlayAllCardsActionContext, 0) as PlayAllCardsActionContext;
	}
	public playOneCardAction(): PlayOneCardActionContext {
		return this.getTypedRuleContext(PlayOneCardActionContext, 0) as PlayOneCardActionContext;
	}
	public acquireCardAction(): AcquireCardActionContext {
		return this.getTypedRuleContext(AcquireCardActionContext, 0) as AcquireCardActionContext;
	}
	public endTurnAction(): EndTurnActionContext {
		return this.getTypedRuleContext(EndTurnActionContext, 0) as EndTurnActionContext;
	}
	public attackPlayerAction(): AttackPlayerActionContext {
		return this.getTypedRuleContext(AttackPlayerActionContext, 0) as AttackPlayerActionContext;
	}
	public attackBaseAction(): AttackBaseActionContext {
		return this.getTypedRuleContext(AttackBaseActionContext, 0) as AttackBaseActionContext;
	}
	public scrapSubjectCardAction(): ScrapSubjectCardActionContext {
		return this.getTypedRuleContext(ScrapSubjectCardActionContext, 0) as ScrapSubjectCardActionContext;
	}
	public scrapObjectCardAction(): ScrapObjectCardActionContext {
		return this.getTypedRuleContext(ScrapObjectCardActionContext, 0) as ScrapObjectCardActionContext;
	}
	public noScrapObjectCardAction(): NoScrapObjectCardActionContext {
		return this.getTypedRuleContext(NoScrapObjectCardActionContext, 0) as NoScrapObjectCardActionContext;
	}
	public discardCardAction(): DiscardCardActionContext {
		return this.getTypedRuleContext(DiscardCardActionContext, 0) as DiscardCardActionContext;
	}
	public noDiscardCardAction(): NoDiscardCardActionContext {
		return this.getTypedRuleContext(NoDiscardCardActionContext, 0) as NoDiscardCardActionContext;
	}
	public resolveDiscardAction(): ResolveDiscardActionContext {
		return this.getTypedRuleContext(ResolveDiscardActionContext, 0) as ResolveDiscardActionContext;
	}
	public resolveDiscardAndRedrawAction(): ResolveDiscardAndRedrawActionContext {
		return this.getTypedRuleContext(ResolveDiscardAndRedrawActionContext, 0) as ResolveDiscardAndRedrawActionContext;
	}
	public activateCardAction(): ActivateCardActionContext {
		return this.getTypedRuleContext(ActivateCardActionContext, 0) as ActivateCardActionContext;
	}
	public choseAction(): ChoseActionContext {
		return this.getTypedRuleContext(ChoseActionContext, 0) as ChoseActionContext;
	}
	public genericResolveAction(): GenericResolveActionContext {
		return this.getTypedRuleContext(GenericResolveActionContext, 0) as GenericResolveActionContext;
	}
	public selectCardAction(): SelectCardActionContext {
		return this.getTypedRuleContext(SelectCardActionContext, 0) as SelectCardActionContext;
	}
	public returnCardAction(): ReturnCardActionContext {
		return this.getTypedRuleContext(ReturnCardActionContext, 0) as ReturnCardActionContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_action;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterAction) {
	 		listener.enterAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitAction) {
	 		listener.exitAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitAction) {
			return visitor.visitAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlayAllCardsActionContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLAY_ALL(): TerminalNode {
		return this.getToken(LogParser.PLAY_ALL, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_playAllCardsAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterPlayAllCardsAction) {
	 		listener.enterPlayAllCardsAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitPlayAllCardsAction) {
	 		listener.exitPlayAllCardsAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitPlayAllCardsAction) {
			return visitor.visitPlayAllCardsAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlayOneCardActionContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLAYED_CAP(): TerminalNode {
		return this.getToken(LogParser.PLAYED_CAP, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_playOneCardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterPlayOneCardAction) {
	 		listener.enterPlayOneCardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitPlayOneCardAction) {
	 		listener.exitPlayOneCardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitPlayOneCardAction) {
			return visitor.visitPlayOneCardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AcquireCardActionContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACQUIRED(): TerminalNode {
		return this.getToken(LogParser.ACQUIRED, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_acquireCardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterAcquireCardAction) {
	 		listener.enterAcquireCardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitAcquireCardAction) {
	 		listener.exitAcquireCardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitAcquireCardAction) {
			return visitor.visitAcquireCardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndTurnActionContext extends ParserRuleContext {
	public _player!: WordContext;
	public _turn!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENDS_TURN(): TerminalNode {
		return this.getToken(LogParser.ENDS_TURN, 0);
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
	public NUM(): TerminalNode {
		return this.getToken(LogParser.NUM, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_endTurnAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterEndTurnAction) {
	 		listener.enterEndTurnAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitEndTurnAction) {
	 		listener.exitEndTurnAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitEndTurnAction) {
			return visitor.visitEndTurnAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttackPlayerActionContext extends ParserRuleContext {
	public _targetPlayer!: WordContext;
	public _damage!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTACKED_CAP(): TerminalNode {
		return this.getToken(LogParser.ATTACKED_CAP, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(LogParser.FOR, 0);
	}
	public NEW_AUTHORITY(): TerminalNode {
		return this.getToken(LogParser.NEW_AUTHORITY, 0);
	}
	public signedNum(): SignedNumContext {
		return this.getTypedRuleContext(SignedNumContext, 0) as SignedNumContext;
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
	public NUM(): TerminalNode {
		return this.getToken(LogParser.NUM, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_attackPlayerAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterAttackPlayerAction) {
	 		listener.enterAttackPlayerAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitAttackPlayerAction) {
	 		listener.exitAttackPlayerAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitAttackPlayerAction) {
			return visitor.visitAttackPlayerAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttackBaseActionContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTACKED_CAP(): TerminalNode {
		return this.getToken(LogParser.ATTACKED_CAP, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_attackBaseAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterAttackBaseAction) {
	 		listener.enterAttackBaseAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitAttackBaseAction) {
	 		listener.exitAttackBaseAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitAttackBaseAction) {
			return visitor.visitAttackBaseAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScrapSubjectCardActionContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SCRAPPING_CAP(): TerminalNode {
		return this.getToken(LogParser.SCRAPPING_CAP, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_scrapSubjectCardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterScrapSubjectCardAction) {
	 		listener.enterScrapSubjectCardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitScrapSubjectCardAction) {
	 		listener.exitScrapSubjectCardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitScrapSubjectCardAction) {
			return visitor.visitScrapSubjectCardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScrapObjectCardActionContext extends ParserRuleContext {
	public _player!: WordContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IS_SCRAPPING(): TerminalNode {
		return this.getToken(LogParser.IS_SCRAPPING, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_scrapObjectCardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterScrapObjectCardAction) {
	 		listener.enterScrapObjectCardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitScrapObjectCardAction) {
	 		listener.exitScrapObjectCardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitScrapObjectCardAction) {
			return visitor.visitScrapObjectCardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoScrapObjectCardActionContext extends ParserRuleContext {
	public _player!: WordContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IS_NOT_SCRAPPING_ANY_CARDS(): TerminalNode {
		return this.getToken(LogParser.IS_NOT_SCRAPPING_ANY_CARDS, 0);
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_noScrapObjectCardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterNoScrapObjectCardAction) {
	 		listener.enterNoScrapObjectCardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitNoScrapObjectCardAction) {
	 		listener.exitNoScrapObjectCardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitNoScrapObjectCardAction) {
			return visitor.visitNoScrapObjectCardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DiscardCardActionContext extends ParserRuleContext {
	public _player!: WordContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IS_DISCARDING(): TerminalNode {
		return this.getToken(LogParser.IS_DISCARDING, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_discardCardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterDiscardCardAction) {
	 		listener.enterDiscardCardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitDiscardCardAction) {
	 		listener.exitDiscardCardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitDiscardCardAction) {
			return visitor.visitDiscardCardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoDiscardCardActionContext extends ParserRuleContext {
	public _player!: WordContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IS_NOT_DISCARDING_ANY_CARDS(): TerminalNode {
		return this.getToken(LogParser.IS_NOT_DISCARDING_ANY_CARDS, 0);
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_noDiscardCardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterNoDiscardCardAction) {
	 		listener.enterNoDiscardCardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitNoDiscardCardAction) {
	 		listener.exitNoDiscardCardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitNoDiscardCardAction) {
			return visitor.visitNoDiscardCardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResolveDiscardActionContext extends ParserRuleContext {
	public _cards!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESOLVING_DISCARD(): TerminalNode {
		return this.getToken(LogParser.RESOLVING_DISCARD, 0);
	}
	public CARDS(): TerminalNode {
		return this.getToken(LogParser.CARDS, 0);
	}
	public NUM(): TerminalNode {
		return this.getToken(LogParser.NUM, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_resolveDiscardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterResolveDiscardAction) {
	 		listener.enterResolveDiscardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitResolveDiscardAction) {
	 		listener.exitResolveDiscardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitResolveDiscardAction) {
			return visitor.visitResolveDiscardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResolveDiscardAndRedrawActionContext extends ParserRuleContext {
	public _cards!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESOLVING_DISCARD(): TerminalNode {
		return this.getToken(LogParser.RESOLVING_DISCARD, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(LogParser.AND, 0);
	}
	public REDRAW_UP_TO(): TerminalNode {
		return this.getToken(LogParser.REDRAW_UP_TO, 0);
	}
	public CARDS2(): TerminalNode {
		return this.getToken(LogParser.CARDS2, 0);
	}
	public NUM(): TerminalNode {
		return this.getToken(LogParser.NUM, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_resolveDiscardAndRedrawAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterResolveDiscardAndRedrawAction) {
	 		listener.enterResolveDiscardAndRedrawAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitResolveDiscardAndRedrawAction) {
	 		listener.exitResolveDiscardAndRedrawAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitResolveDiscardAndRedrawAction) {
			return visitor.visitResolveDiscardAndRedrawAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActivateCardActionContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACTIVATING(): TerminalNode {
		return this.getToken(LogParser.ACTIVATING, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_activateCardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterActivateCardAction) {
	 		listener.enterActivateCardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitActivateCardAction) {
	 		listener.exitActivateCardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitActivateCardAction) {
			return visitor.visitActivateCardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoseActionContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHOSE_CAP(): TerminalNode {
		return this.getToken(LogParser.CHOSE_CAP, 0);
	}
	public addTrade(): AddTradeContext {
		return this.getTypedRuleContext(AddTradeContext, 0) as AddTradeContext;
	}
	public addCombat(): AddCombatContext {
		return this.getTypedRuleContext(AddCombatContext, 0) as AddCombatContext;
	}
	public addAuthority(): AddAuthorityContext {
		return this.getTypedRuleContext(AddAuthorityContext, 0) as AddAuthorityContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_choseAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterChoseAction) {
	 		listener.enterChoseAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitChoseAction) {
	 		listener.exitChoseAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitChoseAction) {
			return visitor.visitChoseAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericResolveActionContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESOLVING_CAP(): TerminalNode {
		return this.getToken(LogParser.RESOLVING_CAP, 0);
	}
	public word_list(): WordContext[] {
		return this.getTypedRuleContexts(WordContext) as WordContext[];
	}
	public word(i: number): WordContext {
		return this.getTypedRuleContext(WordContext, i) as WordContext;
	}
	public NUM_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.NUM);
	}
	public NUM(i: number): TerminalNode {
		return this.getToken(LogParser.NUM, i);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_genericResolveAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterGenericResolveAction) {
	 		listener.enterGenericResolveAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitGenericResolveAction) {
	 		listener.exitGenericResolveAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitGenericResolveAction) {
			return visitor.visitGenericResolveAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectCardActionContext extends ParserRuleContext {
	public _player!: WordContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECTING(): TerminalNode {
		return this.getToken(LogParser.SELECTING, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
	public IS(): TerminalNode {
		return this.getToken(LogParser.IS, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_selectCardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterSelectCardAction) {
	 		listener.enterSelectCardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitSelectCardAction) {
	 		listener.exitSelectCardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitSelectCardAction) {
			return visitor.visitSelectCardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnCardActionContext extends ParserRuleContext {
	public _player!: WordContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IS_RETURNING(): TerminalNode {
		return this.getToken(LogParser.IS_RETURNING, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_returnCardAction;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterReturnCardAction) {
	 		listener.enterReturnCardAction(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitReturnCardAction) {
	 		listener.exitReturnCardAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitReturnCardAction) {
			return visitor.visitReturnCardAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EffectLineContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INDENT(): TerminalNode {
		return this.getToken(LogParser.INDENT, 0);
	}
	public effect(): EffectContext {
		return this.getTypedRuleContext(EffectContext, 0) as EffectContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(LogParser.NEWLINE, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_effectLine;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterEffectLine) {
	 		listener.enterEffectLine(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitEffectLine) {
	 		listener.exitEffectLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitEffectLine) {
			return visitor.visitEffectLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shuffledEffect(): ShuffledEffectContext {
		return this.getTypedRuleContext(ShuffledEffectContext, 0) as ShuffledEffectContext;
	}
	public turnChangedEffect(): TurnChangedEffectContext {
		return this.getTypedRuleContext(TurnChangedEffectContext, 0) as TurnChangedEffectContext;
	}
	public cardToOwnerEffect(): CardToOwnerEffectContext {
		return this.getTypedRuleContext(CardToOwnerEffectContext, 0) as CardToOwnerEffectContext;
	}
	public cardToOpponentEffect(): CardToOpponentEffectContext {
		return this.getTypedRuleContext(CardToOpponentEffectContext, 0) as CardToOpponentEffectContext;
	}
	public sideEffect(): SideEffectContext {
		return this.getTypedRuleContext(SideEffectContext, 0) as SideEffectContext;
	}
	public drewCardsEffect(): DrewCardsEffectContext {
		return this.getTypedRuleContext(DrewCardsEffectContext, 0) as DrewCardsEffectContext;
	}
	public refreshedAllyIndicatorsEffect(): RefreshedAllyIndicatorsEffectContext {
		return this.getTypedRuleContext(RefreshedAllyIndicatorsEffectContext, 0) as RefreshedAllyIndicatorsEffectContext;
	}
	public scrappedCardEffect(): ScrappedCardEffectContext {
		return this.getTypedRuleContext(ScrappedCardEffectContext, 0) as ScrappedCardEffectContext;
	}
	public noMoreCardsToDiscardEffect(): NoMoreCardsToDiscardEffectContext {
		return this.getTypedRuleContext(NoMoreCardsToDiscardEffectContext, 0) as NoMoreCardsToDiscardEffectContext;
	}
	public discardedCardEffect(): DiscardedCardEffectContext {
		return this.getTypedRuleContext(DiscardedCardEffectContext, 0) as DiscardedCardEffectContext;
	}
	public wonGameEffect(): WonGameEffectContext {
		return this.getTypedRuleContext(WonGameEffectContext, 0) as WonGameEffectContext;
	}
	public destroyedBaseEffect(): DestroyedBaseEffectContext {
		return this.getTypedRuleContext(DestroyedBaseEffectContext, 0) as DestroyedBaseEffectContext;
	}
	public revealedEventEffect(): RevealedEventEffectContext {
		return this.getTypedRuleContext(RevealedEventEffectContext, 0) as RevealedEventEffectContext;
	}
	public revealedEffect(): RevealedEffectContext {
		return this.getTypedRuleContext(RevealedEffectContext, 0) as RevealedEffectContext;
	}
	public acquiredToTheTopOfDeckEffect(): AcquiredToTheTopOfDeckEffectContext {
		return this.getTypedRuleContext(AcquiredToTheTopOfDeckEffectContext, 0) as AcquiredToTheTopOfDeckEffectContext;
	}
	public acquiredToHandEffect(): AcquiredToHandEffectContext {
		return this.getTypedRuleContext(AcquiredToHandEffectContext, 0) as AcquiredToHandEffectContext;
	}
	public changedToOnTableImage(): ChangedToOnTableImageContext {
		return this.getTypedRuleContext(ChangedToOnTableImageContext, 0) as ChangedToOnTableImageContext;
	}
	public changedCardToCard(): ChangedCardToCardContext {
		return this.getTypedRuleContext(ChangedCardToCardContext, 0) as ChangedCardToCardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_effect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterEffect) {
	 		listener.enterEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitEffect) {
	 		listener.exitEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitEffect) {
			return visitor.visitEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShuffledEffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHUFFLED_DISCARD_PILE_TO_FORM_NEW_DECK(): TerminalNode {
		return this.getToken(LogParser.SHUFFLED_DISCARD_PILE_TO_FORM_NEW_DECK, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_shuffledEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterShuffledEffect) {
	 		listener.enterShuffledEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitShuffledEffect) {
	 		listener.exitShuffledEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitShuffledEffect) {
			return visitor.visitShuffledEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TurnChangedEffectContext extends ParserRuleContext {
	public _player!: WordContext;
	public _turn!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IT_IS_NOW(): TerminalNode {
		return this.getToken(LogParser.IT_IS_NOW, 0);
	}
	public TURN(): TerminalNode {
		return this.getToken(LogParser.TURN, 0);
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
	public NUM(): TerminalNode {
		return this.getToken(LogParser.NUM, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_turnChangedEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterTurnChangedEffect) {
	 		listener.enterTurnChangedEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitTurnChangedEffect) {
	 		listener.exitTurnChangedEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitTurnChangedEffect) {
			return visitor.visitTurnChangedEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CardToOwnerEffectContext extends ParserRuleContext {
	public _player!: WordContext;
	public _ability!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
	public tradeChange(): TradeChangeContext {
		return this.getTypedRuleContext(TradeChangeContext, 0) as TradeChangeContext;
	}
	public combatChange(): CombatChangeContext {
		return this.getTypedRuleContext(CombatChangeContext, 0) as CombatChangeContext;
	}
	public authorityChange(): AuthorityChangeContext {
		return this.getTypedRuleContext(AuthorityChangeContext, 0) as AuthorityChangeContext;
	}
	public ABILITY_AVAILABLE(): TerminalNode {
		return this.getToken(LogParser.ABILITY_AVAILABLE, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_cardToOwnerEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterCardToOwnerEffect) {
	 		listener.enterCardToOwnerEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitCardToOwnerEffect) {
	 		listener.exitCardToOwnerEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitCardToOwnerEffect) {
			return visitor.visitCardToOwnerEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CardToOpponentEffectContext extends ParserRuleContext {
	public _player!: WordContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
	public discardChange(): DiscardChangeContext {
		return this.getTypedRuleContext(DiscardChangeContext, 0) as DiscardChangeContext;
	}
	public authorityChange(): AuthorityChangeContext {
		return this.getTypedRuleContext(AuthorityChangeContext, 0) as AuthorityChangeContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_cardToOpponentEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterCardToOpponentEffect) {
	 		listener.enterCardToOpponentEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitCardToOpponentEffect) {
	 		listener.exitCardToOpponentEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitCardToOpponentEffect) {
			return visitor.visitCardToOpponentEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SideEffectContext extends ParserRuleContext {
	public _player!: WordContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
	public tradeChange(): TradeChangeContext {
		return this.getTypedRuleContext(TradeChangeContext, 0) as TradeChangeContext;
	}
	public combatChange(): CombatChangeContext {
		return this.getTypedRuleContext(CombatChangeContext, 0) as CombatChangeContext;
	}
	public authorityChange(): AuthorityChangeContext {
		return this.getTypedRuleContext(AuthorityChangeContext, 0) as AuthorityChangeContext;
	}
	public discardChange(): DiscardChangeContext {
		return this.getTypedRuleContext(DiscardChangeContext, 0) as DiscardChangeContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_sideEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterSideEffect) {
	 		listener.enterSideEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitSideEffect) {
	 		listener.exitSideEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitSideEffect) {
			return visitor.visitSideEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DrewCardsEffectContext extends ParserRuleContext {
	public _cards!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DREW_CAP(): TerminalNode {
		return this.getToken(LogParser.DREW_CAP, 0);
	}
	public CARDS(): TerminalNode {
		return this.getToken(LogParser.CARDS, 0);
	}
	public NUM(): TerminalNode {
		return this.getToken(LogParser.NUM, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_drewCardsEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterDrewCardsEffect) {
	 		listener.enterDrewCardsEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitDrewCardsEffect) {
	 		listener.exitDrewCardsEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitDrewCardsEffect) {
			return visitor.visitDrewCardsEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefreshedAllyIndicatorsEffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REFRESH_ALLY_INDICATORS(): TerminalNode {
		return this.getToken(LogParser.REFRESH_ALLY_INDICATORS, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_refreshedAllyIndicatorsEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterRefreshedAllyIndicatorsEffect) {
	 		listener.enterRefreshedAllyIndicatorsEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitRefreshedAllyIndicatorsEffect) {
	 		listener.exitRefreshedAllyIndicatorsEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitRefreshedAllyIndicatorsEffect) {
			return visitor.visitRefreshedAllyIndicatorsEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScrappedCardEffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SCRAPPED_CAP(): TerminalNode {
		return this.getToken(LogParser.SCRAPPED_CAP, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_scrappedCardEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterScrappedCardEffect) {
	 		listener.enterScrappedCardEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitScrappedCardEffect) {
	 		listener.exitScrappedCardEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitScrappedCardEffect) {
			return visitor.visitScrappedCardEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoMoreCardsToDiscardEffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NO_MORE_CARDS_TO_DISCARD(): TerminalNode {
		return this.getToken(LogParser.NO_MORE_CARDS_TO_DISCARD, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_noMoreCardsToDiscardEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterNoMoreCardsToDiscardEffect) {
	 		listener.enterNoMoreCardsToDiscardEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitNoMoreCardsToDiscardEffect) {
	 		listener.exitNoMoreCardsToDiscardEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitNoMoreCardsToDiscardEffect) {
			return visitor.visitNoMoreCardsToDiscardEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DiscardedCardEffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DISCARDED_CAP(): TerminalNode {
		return this.getToken(LogParser.DISCARDED_CAP, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_discardedCardEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterDiscardedCardEffect) {
	 		listener.enterDiscardedCardEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitDiscardedCardEffect) {
	 		listener.exitDiscardedCardEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitDiscardedCardEffect) {
			return visitor.visitDiscardedCardEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WonGameEffectContext extends ParserRuleContext {
	public _player!: WordContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HAS_WON_THE_GAME(): TerminalNode {
		return this.getToken(LogParser.HAS_WON_THE_GAME, 0);
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_wonGameEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterWonGameEffect) {
	 		listener.enterWonGameEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitWonGameEffect) {
	 		listener.exitWonGameEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitWonGameEffect) {
			return visitor.visitWonGameEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DestroyedBaseEffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DESTROYED_CAP(): TerminalNode {
		return this.getToken(LogParser.DESTROYED_CAP, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_destroyedBaseEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterDestroyedBaseEffect) {
	 		listener.enterDestroyedBaseEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitDestroyedBaseEffect) {
	 		listener.exitDestroyedBaseEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitDestroyedBaseEffect) {
			return visitor.visitDestroyedBaseEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RevealedEventEffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REVEALED_EVENT(): TerminalNode {
		return this.getToken(LogParser.REVEALED_EVENT, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_revealedEventEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterRevealedEventEffect) {
	 		listener.enterRevealedEventEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitRevealedEventEffect) {
	 		listener.exitRevealedEventEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitRevealedEventEffect) {
			return visitor.visitRevealedEventEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RevealedEffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REVEALED_CAP(): TerminalNode {
		return this.getToken(LogParser.REVEALED_CAP, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_revealedEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterRevealedEffect) {
	 		listener.enterRevealedEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitRevealedEffect) {
	 		listener.exitRevealedEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitRevealedEffect) {
			return visitor.visitRevealedEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AcquiredToTheTopOfDeckEffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACQUIRED(): TerminalNode {
		return this.getToken(LogParser.ACQUIRED, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
	public TO_THE_TOP_OF_THE_DECK(): TerminalNode {
		return this.getToken(LogParser.TO_THE_TOP_OF_THE_DECK, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_acquiredToTheTopOfDeckEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterAcquiredToTheTopOfDeckEffect) {
	 		listener.enterAcquiredToTheTopOfDeckEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitAcquiredToTheTopOfDeckEffect) {
	 		listener.exitAcquiredToTheTopOfDeckEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitAcquiredToTheTopOfDeckEffect) {
			return visitor.visitAcquiredToTheTopOfDeckEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AcquiredToHandEffectContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACQUIRED(): TerminalNode {
		return this.getToken(LogParser.ACQUIRED, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
	public TO_HAND(): TerminalNode {
		return this.getToken(LogParser.TO_HAND, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_acquiredToHandEffect;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterAcquiredToHandEffect) {
	 		listener.enterAcquiredToHandEffect(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitAcquiredToHandEffect) {
	 		listener.exitAcquiredToHandEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitAcquiredToHandEffect) {
			return visitor.visitAcquiredToHandEffect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChangedToOnTableImageContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHANGED_CAP(): TerminalNode {
		return this.getToken(LogParser.CHANGED_CAP, 0);
	}
	public card(): CardContext {
		return this.getTypedRuleContext(CardContext, 0) as CardContext;
	}
	public TO_ON_TABLE_IMAGE(): TerminalNode {
		return this.getToken(LogParser.TO_ON_TABLE_IMAGE, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_changedToOnTableImage;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterChangedToOnTableImage) {
	 		listener.enterChangedToOnTableImage(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitChangedToOnTableImage) {
	 		listener.exitChangedToOnTableImage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitChangedToOnTableImage) {
			return visitor.visitChangedToOnTableImage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChangedCardToCardContext extends ParserRuleContext {
	public _fromCard!: CardContext;
	public _toCard!: CardContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHANGED_CAP(): TerminalNode {
		return this.getToken(LogParser.CHANGED_CAP, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(LogParser.TO, 0);
	}
	public card_list(): CardContext[] {
		return this.getTypedRuleContexts(CardContext) as CardContext[];
	}
	public card(i: number): CardContext {
		return this.getTypedRuleContext(CardContext, i) as CardContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_changedCardToCard;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterChangedCardToCard) {
	 		listener.enterChangedCardToCard(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitChangedCardToCard) {
	 		listener.exitChangedCardToCard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitChangedCardToCard) {
			return visitor.visitChangedCardToCard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CardContext extends ParserRuleContext {
	public _word!: WordContext;
	public _name: WordContext[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public word_list(): WordContext[] {
		return this.getTypedRuleContexts(WordContext) as WordContext[];
	}
	public word(i: number): WordContext {
		return this.getTypedRuleContext(WordContext, i) as WordContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_card;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterCard) {
	 		listener.enterCard(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitCard) {
	 		listener.exitCard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitCard) {
			return visitor.visitCard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddTradeContext extends ParserRuleContext {
	public _amount!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(LogParser.ADD, 0);
	}
	public TRADE_CAP(): TerminalNode {
		return this.getToken(LogParser.TRADE_CAP, 0);
	}
	public NUM(): TerminalNode {
		return this.getToken(LogParser.NUM, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_addTrade;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterAddTrade) {
	 		listener.enterAddTrade(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitAddTrade) {
	 		listener.exitAddTrade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitAddTrade) {
			return visitor.visitAddTrade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddCombatContext extends ParserRuleContext {
	public _amount!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(LogParser.ADD, 0);
	}
	public COMBAT_CAP(): TerminalNode {
		return this.getToken(LogParser.COMBAT_CAP, 0);
	}
	public NUM(): TerminalNode {
		return this.getToken(LogParser.NUM, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_addCombat;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterAddCombat) {
	 		listener.enterAddCombat(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitAddCombat) {
	 		listener.exitAddCombat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitAddCombat) {
			return visitor.visitAddCombat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddAuthorityContext extends ParserRuleContext {
	public _amount!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(LogParser.ADD, 0);
	}
	public AUTHORITY_CAP(): TerminalNode {
		return this.getToken(LogParser.AUTHORITY_CAP, 0);
	}
	public NUM(): TerminalNode {
		return this.getToken(LogParser.NUM, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_addAuthority;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterAddAuthority) {
	 		listener.enterAddAuthority(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitAddAuthority) {
	 		listener.exitAddAuthority(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitAddAuthority) {
			return visitor.visitAddAuthority(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TradeChangeContext extends ParserRuleContext {
	public _change!: SignedNumContext;
	public _final!: SignedNumContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRADE_CAP_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.TRADE_CAP);
	}
	public TRADE_CAP(i: number): TerminalNode {
		return this.getToken(LogParser.TRADE_CAP, i);
	}
	public signedNum_list(): SignedNumContext[] {
		return this.getTypedRuleContexts(SignedNumContext) as SignedNumContext[];
	}
	public signedNum(i: number): SignedNumContext {
		return this.getTypedRuleContext(SignedNumContext, i) as SignedNumContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_tradeChange;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterTradeChange) {
	 		listener.enterTradeChange(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitTradeChange) {
	 		listener.exitTradeChange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitTradeChange) {
			return visitor.visitTradeChange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CombatChangeContext extends ParserRuleContext {
	public _change!: SignedNumContext;
	public _final!: SignedNumContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMBAT_CAP_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.COMBAT_CAP);
	}
	public COMBAT_CAP(i: number): TerminalNode {
		return this.getToken(LogParser.COMBAT_CAP, i);
	}
	public signedNum_list(): SignedNumContext[] {
		return this.getTypedRuleContexts(SignedNumContext) as SignedNumContext[];
	}
	public signedNum(i: number): SignedNumContext {
		return this.getTypedRuleContext(SignedNumContext, i) as SignedNumContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_combatChange;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterCombatChange) {
	 		listener.enterCombatChange(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitCombatChange) {
	 		listener.exitCombatChange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitCombatChange) {
			return visitor.visitCombatChange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AuthorityChangeContext extends ParserRuleContext {
	public _change!: SignedNumContext;
	public _final!: SignedNumContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AUTHORITY_CAP_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.AUTHORITY_CAP);
	}
	public AUTHORITY_CAP(i: number): TerminalNode {
		return this.getToken(LogParser.AUTHORITY_CAP, i);
	}
	public signedNum_list(): SignedNumContext[] {
		return this.getTypedRuleContexts(SignedNumContext) as SignedNumContext[];
	}
	public signedNum(i: number): SignedNumContext {
		return this.getTypedRuleContext(SignedNumContext, i) as SignedNumContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_authorityChange;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterAuthorityChange) {
	 		listener.enterAuthorityChange(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitAuthorityChange) {
	 		listener.exitAuthorityChange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitAuthorityChange) {
			return visitor.visitAuthorityChange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DiscardChangeContext extends ParserRuleContext {
	public _change!: SignedNumContext;
	public _final!: SignedNumContext;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DISCARD_CAP(): TerminalNode {
		return this.getToken(LogParser.DISCARD_CAP, 0);
	}
	public DISCARDING_CAP(): TerminalNode {
		return this.getToken(LogParser.DISCARDING_CAP, 0);
	}
	public signedNum_list(): SignedNumContext[] {
		return this.getTypedRuleContexts(SignedNumContext) as SignedNumContext[];
	}
	public signedNum(i: number): SignedNumContext {
		return this.getTypedRuleContext(SignedNumContext, i) as SignedNumContext;
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_discardChange;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterDiscardChange) {
	 		listener.enterDiscardChange(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitDiscardChange) {
	 		listener.exitDiscardChange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitDiscardChange) {
			return visitor.visitDiscardChange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedNumContext extends ParserRuleContext {
	public _sign!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUM(): TerminalNode {
		return this.getToken(LogParser.NUM, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_signedNum;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterSignedNum) {
	 		listener.enterSignedNum(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitSignedNum) {
	 		listener.exitSignedNum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitSignedNum) {
			return visitor.visitSignedNum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WordContext extends ParserRuleContext {
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRADE_CAP(): TerminalNode {
		return this.getToken(LogParser.TRADE_CAP, 0);
	}
	public SCRAPPING_CAP(): TerminalNode {
		return this.getToken(LogParser.SCRAPPING_CAP, 0);
	}
	public SCRAPPED_CAP(): TerminalNode {
		return this.getToken(LogParser.SCRAPPED_CAP, 0);
	}
	public REVEALED_CAP(): TerminalNode {
		return this.getToken(LogParser.REVEALED_CAP, 0);
	}
	public RESOLVING_CAP(): TerminalNode {
		return this.getToken(LogParser.RESOLVING_CAP, 0);
	}
	public PLAYED_CAP(): TerminalNode {
		return this.getToken(LogParser.PLAYED_CAP, 0);
	}
	public DREW_CAP(): TerminalNode {
		return this.getToken(LogParser.DREW_CAP, 0);
	}
	public DISCARDING_CAP(): TerminalNode {
		return this.getToken(LogParser.DISCARDING_CAP, 0);
	}
	public DISCARDED_CAP(): TerminalNode {
		return this.getToken(LogParser.DISCARDED_CAP, 0);
	}
	public DISCARD_CAP(): TerminalNode {
		return this.getToken(LogParser.DISCARD_CAP, 0);
	}
	public DESTROYED_CAP(): TerminalNode {
		return this.getToken(LogParser.DESTROYED_CAP, 0);
	}
	public COMBAT_CAP(): TerminalNode {
		return this.getToken(LogParser.COMBAT_CAP, 0);
	}
	public CHOSE_CAP(): TerminalNode {
		return this.getToken(LogParser.CHOSE_CAP, 0);
	}
	public CHANGED_CAP(): TerminalNode {
		return this.getToken(LogParser.CHANGED_CAP, 0);
	}
	public AUTHORITY_CAP(): TerminalNode {
		return this.getToken(LogParser.AUTHORITY_CAP, 0);
	}
	public ATTACKED_CAP(): TerminalNode {
		return this.getToken(LogParser.ATTACKED_CAP, 0);
	}
	public ADD(): TerminalNode {
		return this.getToken(LogParser.ADD, 0);
	}
	public ACTIVATING(): TerminalNode {
		return this.getToken(LogParser.ACTIVATING, 0);
	}
	public ACQUIRED(): TerminalNode {
		return this.getToken(LogParser.ACQUIRED, 0);
	}
	public TURN(): TerminalNode {
		return this.getToken(LogParser.TURN, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(LogParser.TO, 0);
	}
	public SELECTING(): TerminalNode {
		return this.getToken(LogParser.SELECTING, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(LogParser.IS, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(LogParser.FOR, 0);
	}
	public ENDS(): TerminalNode {
		return this.getToken(LogParser.ENDS, 0);
	}
	public CARDS(): TerminalNode {
		return this.getToken(LogParser.CARDS, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(LogParser.AND, 0);
	}
	public WORD(): TerminalNode {
		return this.getToken(LogParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return LogParser.RULE_word;
	}
	public enterRule(listener: LogListener): void {
	    if(listener.enterWord) {
	 		listener.enterWord(this);
		}
	}
	public exitRule(listener: LogListener): void {
	    if(listener.exitWord) {
	 		listener.exitWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LogVisitor<Result>): Result {
		if (visitor.visitWord) {
			return visitor.visitWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
