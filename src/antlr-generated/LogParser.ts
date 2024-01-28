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
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly NEWLINE = 46;
	public static readonly INDENT = 47;
	public static readonly SPACE = 48;
	public static readonly COLOR_OPEN = 49;
	public static readonly COLOR_CLOSE = 50;
	public static readonly NUM = 51;
	public static readonly WORD = 52;
	public static readonly UNKNOWN = 53;
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
	public static readonly RULE_resolveDiscardAction = 14;
	public static readonly RULE_activateCardAction = 15;
	public static readonly RULE_choseAction = 16;
	public static readonly RULE_genericResolveAction = 17;
	public static readonly RULE_effectLine = 18;
	public static readonly RULE_effect = 19;
	public static readonly RULE_shuffledEffect = 20;
	public static readonly RULE_turnChangedEffect = 21;
	public static readonly RULE_cardToOwnerEffect = 22;
	public static readonly RULE_cardToOpponentEffect = 23;
	public static readonly RULE_sideEffect = 24;
	public static readonly RULE_drewCardsEffect = 25;
	public static readonly RULE_refreshedAllyIndicatorsEffect = 26;
	public static readonly RULE_scrappedCardEffect = 27;
	public static readonly RULE_noMoreCardsToDiscardEffect = 28;
	public static readonly RULE_discardedCardEffect = 29;
	public static readonly RULE_wonGameEffect = 30;
	public static readonly RULE_destroyedBaseEffect = 31;
	public static readonly RULE_revealedEventEffect = 32;
	public static readonly RULE_addTrade = 33;
	public static readonly RULE_addCombat = 34;
	public static readonly RULE_addAuthority = 35;
	public static readonly RULE_tradeChange = 36;
	public static readonly RULE_combatChange = 37;
	public static readonly RULE_authorityChange = 38;
	public static readonly RULE_discardChange = 39;
	public static readonly RULE_signedNum = 40;
	public static readonly literalNames: (string | null)[] = [ null, "'Play all'", 
                                                            "'Played'", 
                                                            "'Acquired'", 
                                                            "'ends turn'", 
                                                            "'Attacked'", 
                                                            "'for'", "'(New Authority:'", 
                                                            "')'", "'Scrapping'", 
                                                            "'is scrapping'", 
                                                            "':'", "'is not scrapping any cards'", 
                                                            "'is discarding'", 
                                                            "'Resolving Discard'", 
                                                            "'cards'", "'Activating'", 
                                                            "'Chose'", "'Resolving'", 
                                                            "'Shuffled discard pile to form new deck'", 
                                                            "'It is now '", 
                                                            "''s turn'", 
                                                            "'>'", "'ability available'", 
                                                            "'<'", "'-'", 
                                                            "'Drew'", "'cards.'", 
                                                            "'Refresh ally indicators'", 
                                                            "'Scrapped'", 
                                                            "'no more cards to discard'", 
                                                            "'Discarded'", 
                                                            "'==='", "'has won the game. ==='", 
                                                            "'Destroyed'", 
                                                            "'Revealed event'", 
                                                            "'Add'", "'Trade'", 
                                                            "'Combat'", 
                                                            "'Authority'", 
                                                            "'(Trade:'", 
                                                            "'(Combat:'", 
                                                            "'(Authority:'", 
                                                            "'Discard'", 
                                                            "'(Discarding:'", 
                                                            "'+'", null, 
                                                            "'        '", 
                                                            null, null, 
                                                            "'</color>'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "NEWLINE", 
                                                             "INDENT", "SPACE", 
                                                             "COLOR_OPEN", 
                                                             "COLOR_CLOSE", 
                                                             "NUM", "WORD", 
                                                             "UNKNOWN" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "line", "actionLine", "action", "playAllCardsAction", "playOneCardAction", 
		"acquireCardAction", "endTurnAction", "attackPlayerAction", "attackBaseAction", 
		"scrapSubjectCardAction", "scrapObjectCardAction", "noScrapObjectCardAction", 
		"discardCardAction", "resolveDiscardAction", "activateCardAction", "choseAction", 
		"genericResolveAction", "effectLine", "effect", "shuffledEffect", "turnChangedEffect", 
		"cardToOwnerEffect", "cardToOpponentEffect", "sideEffect", "drewCardsEffect", 
		"refreshedAllyIndicatorsEffect", "scrappedCardEffect", "noMoreCardsToDiscardEffect", 
		"discardedCardEffect", "wonGameEffect", "destroyedBaseEffect", "revealedEventEffect", 
		"addTrade", "addCombat", "addAuthority", "tradeChange", "combatChange", 
		"authorityChange", "discardChange", "signedNum",
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
			this.state = 85;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 82;
					this.match(LogParser.NEWLINE);
					}
					}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 475694) !== 0) || _la===47 || _la===52) {
				{
				{
				this.state = 88;
				localctx._line = this.line();
				localctx._lines.push(localctx._line);
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===46) {
				{
				{
				this.state = 94;
				this.match(LogParser.NEWLINE);
				}
				}
				this.state = 99;
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
			this.state = 102;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 5:
			case 9:
			case 14:
			case 16:
			case 17:
			case 18:
			case 52:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 100;
				this.actionLine();
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 101;
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
			this.state = 104;
			this.action();
			this.state = 105;
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
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 107;
				this.playAllCardsAction();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 108;
				this.playOneCardAction();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 109;
				this.acquireCardAction();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 110;
				this.endTurnAction();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 111;
				this.attackPlayerAction();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 112;
				this.attackBaseAction();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 113;
				this.scrapSubjectCardAction();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 114;
				this.scrapObjectCardAction();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 115;
				this.noScrapObjectCardAction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 116;
				this.discardCardAction();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 117;
				this.resolveDiscardAction();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 118;
				this.activateCardAction();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 119;
				this.choseAction();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 120;
				this.genericResolveAction();
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
			this.state = 123;
			this.match(LogParser.T__0);
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this.match(LogParser.T__1);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 126;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 131;
			this.match(LogParser.T__2);
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 132;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
			this.state = 137;
			localctx._player = this.match(LogParser.WORD);
			this.state = 138;
			this.match(LogParser.T__3);
			this.state = 139;
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
			this.state = 141;
			this.match(LogParser.T__4);
			this.state = 142;
			localctx._targetPlayer = this.match(LogParser.WORD);
			this.state = 143;
			this.match(LogParser.T__5);
			this.state = 144;
			localctx._damage = this.match(LogParser.NUM);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 145;
				this.match(LogParser.T__6);
				}
			}

			this.state = 148;
			this.signedNum();
			this.state = 149;
			this.match(LogParser.T__7);
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			this.match(LogParser.T__4);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 152;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._base.push(localctx._WORD);
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 157;
			this.match(LogParser.T__8);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 158;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
			this.state = 163;
			localctx._player = this.match(LogParser.WORD);
			this.state = 164;
			this.match(LogParser.T__9);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 165;
				this.match(LogParser.T__10);
				}
			}

			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 168;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
			this.state = 173;
			localctx._player = this.match(LogParser.WORD);
			this.state = 174;
			this.match(LogParser.T__11);
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			localctx._player = this.match(LogParser.WORD);
			this.state = 177;
			this.match(LogParser.T__12);
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 178;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
		this.enterRule(localctx, 28, LogParser.RULE_resolveDiscardAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 183;
			this.match(LogParser.T__13);
			this.state = 184;
			localctx._cards = this.match(LogParser.NUM);
			this.state = 185;
			this.match(LogParser.T__14);
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
		this.enterRule(localctx, 30, LogParser.RULE_activateCardAction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 187;
			this.match(LogParser.T__15);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 188;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
		this.enterRule(localctx, 32, LogParser.RULE_choseAction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 193;
			this.match(LogParser.T__16);
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 194;
				this.addTrade();
				}
				break;
			case 2:
				{
				this.state = 195;
				this.addCombat();
				}
				break;
			case 3:
				{
				this.state = 196;
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
		this.enterRule(localctx, 34, LogParser.RULE_genericResolveAction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			this.match(LogParser.T__17);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===52) {
				{
				{
				this.state = 200;
				this.match(LogParser.WORD);
				}
				}
				this.state = 205;
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
	public effectLine(): EffectLineContext {
		let localctx: EffectLineContext = new EffectLineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LogParser.RULE_effectLine);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 206;
			this.match(LogParser.INDENT);
			this.state = 207;
			this.effect();
			this.state = 208;
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
		this.enterRule(localctx, 38, LogParser.RULE_effect);
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 210;
				this.shuffledEffect();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 211;
				this.turnChangedEffect();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 212;
				this.cardToOwnerEffect();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 213;
				this.cardToOpponentEffect();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 214;
				this.sideEffect();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 215;
				this.drewCardsEffect();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 216;
				this.refreshedAllyIndicatorsEffect();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 217;
				this.scrappedCardEffect();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 218;
				this.noMoreCardsToDiscardEffect();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 219;
				this.discardedCardEffect();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 220;
				this.wonGameEffect();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 221;
				this.destroyedBaseEffect();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 222;
				this.revealedEventEffect();
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
		this.enterRule(localctx, 40, LogParser.RULE_shuffledEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 225;
			this.match(LogParser.T__18);
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
		this.enterRule(localctx, 42, LogParser.RULE_turnChangedEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 227;
			this.match(LogParser.T__19);
			this.state = 228;
			localctx._player = this.match(LogParser.WORD);
			this.state = 229;
			this.match(LogParser.T__20);
			this.state = 230;
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
		this.enterRule(localctx, 44, LogParser.RULE_cardToOwnerEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			localctx._player = this.match(LogParser.WORD);
			this.state = 233;
			this.match(LogParser.T__21);
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 234;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
			this.state = 243;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 239;
				this.tradeChange();
				}
				break;
			case 2:
				{
				this.state = 240;
				this.combatChange();
				}
				break;
			case 3:
				{
				this.state = 241;
				this.authorityChange();
				}
				break;
			case 4:
				{
				this.state = 242;
				localctx._ability = this.match(LogParser.T__22);
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
		this.enterRule(localctx, 46, LogParser.RULE_cardToOpponentEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 245;
			localctx._player = this.match(LogParser.WORD);
			this.state = 246;
			this.match(LogParser.T__23);
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 247;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
			this.state = 252;
			this.discardChange();
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
		this.enterRule(localctx, 48, LogParser.RULE_sideEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 254;
			localctx._player = this.match(LogParser.WORD);
			this.state = 255;
			this.match(LogParser.T__24);
			this.state = 259;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 256;
				this.tradeChange();
				}
				break;
			case 2:
				{
				this.state = 257;
				this.combatChange();
				}
				break;
			case 3:
				{
				this.state = 258;
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
	public drewCardsEffect(): DrewCardsEffectContext {
		let localctx: DrewCardsEffectContext = new DrewCardsEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LogParser.RULE_drewCardsEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this.match(LogParser.T__25);
			this.state = 262;
			localctx._cards = this.match(LogParser.NUM);
			this.state = 263;
			this.match(LogParser.T__26);
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
		this.enterRule(localctx, 52, LogParser.RULE_refreshedAllyIndicatorsEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 265;
			this.match(LogParser.T__27);
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
		this.enterRule(localctx, 54, LogParser.RULE_scrappedCardEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 267;
			this.match(LogParser.T__28);
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 268;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
		this.enterRule(localctx, 56, LogParser.RULE_noMoreCardsToDiscardEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 273;
			this.match(LogParser.T__29);
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
		this.enterRule(localctx, 58, LogParser.RULE_discardedCardEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 275;
			this.match(LogParser.T__30);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 276;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
		this.enterRule(localctx, 60, LogParser.RULE_wonGameEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 281;
			this.match(LogParser.T__31);
			this.state = 282;
			localctx._player = this.match(LogParser.WORD);
			this.state = 283;
			this.match(LogParser.T__32);
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
		this.enterRule(localctx, 62, LogParser.RULE_destroyedBaseEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 285;
			this.match(LogParser.T__33);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 286;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._base.push(localctx._WORD);
				}
				}
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
		this.enterRule(localctx, 64, LogParser.RULE_revealedEventEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 291;
			this.match(LogParser.T__34);
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 292;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._event.push(localctx._WORD);
				}
				}
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===52);
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
		this.enterRule(localctx, 66, LogParser.RULE_addTrade);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 297;
			this.match(LogParser.T__35);
			this.state = 298;
			localctx._amount = this.match(LogParser.NUM);
			this.state = 299;
			this.match(LogParser.T__36);
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
		this.enterRule(localctx, 68, LogParser.RULE_addCombat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 301;
			this.match(LogParser.T__35);
			this.state = 302;
			localctx._amount = this.match(LogParser.NUM);
			this.state = 303;
			this.match(LogParser.T__37);
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
		this.enterRule(localctx, 70, LogParser.RULE_addAuthority);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 305;
			this.match(LogParser.T__35);
			this.state = 306;
			localctx._amount = this.match(LogParser.NUM);
			this.state = 307;
			this.match(LogParser.T__38);
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
		this.enterRule(localctx, 72, LogParser.RULE_tradeChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 309;
			localctx._change = this.signedNum();
			this.state = 310;
			this.match(LogParser.T__36);
			this.state = 311;
			this.match(LogParser.T__39);
			this.state = 312;
			localctx._final = this.signedNum();
			this.state = 313;
			this.match(LogParser.T__7);
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
		this.enterRule(localctx, 74, LogParser.RULE_combatChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
			localctx._change = this.signedNum();
			this.state = 316;
			this.match(LogParser.T__37);
			this.state = 317;
			this.match(LogParser.T__40);
			this.state = 318;
			localctx._final = this.signedNum();
			this.state = 319;
			this.match(LogParser.T__7);
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
		this.enterRule(localctx, 76, LogParser.RULE_authorityChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 321;
			localctx._change = this.signedNum();
			this.state = 322;
			this.match(LogParser.T__38);
			this.state = 323;
			this.match(LogParser.T__41);
			this.state = 324;
			localctx._final = this.signedNum();
			this.state = 325;
			this.match(LogParser.T__7);
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
		this.enterRule(localctx, 78, LogParser.RULE_discardChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 327;
			localctx._change = this.signedNum();
			this.state = 328;
			this.match(LogParser.T__42);
			this.state = 329;
			this.match(LogParser.T__43);
			this.state = 330;
			localctx._final = this.signedNum();
			this.state = 331;
			this.match(LogParser.T__7);
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
		this.enterRule(localctx, 80, LogParser.RULE_signedNum);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 333;
				localctx._sign = this.match(LogParser.T__24);
				this.state = 334;
				this.match(LogParser.NUM);
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 335;
				localctx._sign = this.match(LogParser.T__44);
				this.state = 336;
				this.match(LogParser.NUM);
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 337;
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

	public static readonly _serializedATN: number[] = [4,1,53,341,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,1,0,5,0,84,8,0,10,0,12,0,87,9,0,1,0,5,0,90,8,0,10,0,12,
	0,93,9,0,1,0,5,0,96,8,0,10,0,12,0,99,9,0,1,1,1,1,3,1,103,8,1,1,2,1,2,1,
	2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,122,8,3,1,
	4,1,4,1,5,1,5,4,5,128,8,5,11,5,12,5,129,1,6,1,6,4,6,134,8,6,11,6,12,6,135,
	1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,3,8,147,8,8,1,8,1,8,1,8,1,9,1,9,4,9,
	154,8,9,11,9,12,9,155,1,10,1,10,4,10,160,8,10,11,10,12,10,161,1,11,1,11,
	1,11,3,11,167,8,11,1,11,4,11,170,8,11,11,11,12,11,171,1,12,1,12,1,12,1,
	13,1,13,1,13,4,13,180,8,13,11,13,12,13,181,1,14,1,14,1,14,1,14,1,15,1,15,
	4,15,190,8,15,11,15,12,15,191,1,16,1,16,1,16,1,16,3,16,198,8,16,1,17,1,
	17,5,17,202,8,17,10,17,12,17,205,9,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,
	1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,224,8,19,1,20,1,
	20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,4,22,236,8,22,11,22,12,22,237,
	1,22,1,22,1,22,1,22,3,22,244,8,22,1,23,1,23,1,23,4,23,249,8,23,11,23,12,
	23,250,1,23,1,23,1,24,1,24,1,24,1,24,1,24,3,24,260,8,24,1,25,1,25,1,25,
	1,25,1,26,1,26,1,27,1,27,4,27,270,8,27,11,27,12,27,271,1,28,1,28,1,29,1,
	29,4,29,278,8,29,11,29,12,29,279,1,30,1,30,1,30,1,30,1,31,1,31,4,31,288,
	8,31,11,31,12,31,289,1,32,1,32,4,32,294,8,32,11,32,12,32,295,1,33,1,33,
	1,33,1,33,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,
	36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,39,
	1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,3,40,339,8,40,1,40,0,
	0,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
	48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,0,0,353,0,85,1,0,0,0,
	2,102,1,0,0,0,4,104,1,0,0,0,6,121,1,0,0,0,8,123,1,0,0,0,10,125,1,0,0,0,
	12,131,1,0,0,0,14,137,1,0,0,0,16,141,1,0,0,0,18,151,1,0,0,0,20,157,1,0,
	0,0,22,163,1,0,0,0,24,173,1,0,0,0,26,176,1,0,0,0,28,183,1,0,0,0,30,187,
	1,0,0,0,32,193,1,0,0,0,34,199,1,0,0,0,36,206,1,0,0,0,38,223,1,0,0,0,40,
	225,1,0,0,0,42,227,1,0,0,0,44,232,1,0,0,0,46,245,1,0,0,0,48,254,1,0,0,0,
	50,261,1,0,0,0,52,265,1,0,0,0,54,267,1,0,0,0,56,273,1,0,0,0,58,275,1,0,
	0,0,60,281,1,0,0,0,62,285,1,0,0,0,64,291,1,0,0,0,66,297,1,0,0,0,68,301,
	1,0,0,0,70,305,1,0,0,0,72,309,1,0,0,0,74,315,1,0,0,0,76,321,1,0,0,0,78,
	327,1,0,0,0,80,338,1,0,0,0,82,84,5,46,0,0,83,82,1,0,0,0,84,87,1,0,0,0,85,
	83,1,0,0,0,85,86,1,0,0,0,86,91,1,0,0,0,87,85,1,0,0,0,88,90,3,2,1,0,89,88,
	1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,97,1,0,0,0,93,91,1,
	0,0,0,94,96,5,46,0,0,95,94,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,97,98,1,
	0,0,0,98,1,1,0,0,0,99,97,1,0,0,0,100,103,3,4,2,0,101,103,3,36,18,0,102,
	100,1,0,0,0,102,101,1,0,0,0,103,3,1,0,0,0,104,105,3,6,3,0,105,106,5,46,
	0,0,106,5,1,0,0,0,107,122,3,8,4,0,108,122,3,10,5,0,109,122,3,12,6,0,110,
	122,3,14,7,0,111,122,3,16,8,0,112,122,3,18,9,0,113,122,3,20,10,0,114,122,
	3,22,11,0,115,122,3,24,12,0,116,122,3,26,13,0,117,122,3,28,14,0,118,122,
	3,30,15,0,119,122,3,32,16,0,120,122,3,34,17,0,121,107,1,0,0,0,121,108,1,
	0,0,0,121,109,1,0,0,0,121,110,1,0,0,0,121,111,1,0,0,0,121,112,1,0,0,0,121,
	113,1,0,0,0,121,114,1,0,0,0,121,115,1,0,0,0,121,116,1,0,0,0,121,117,1,0,
	0,0,121,118,1,0,0,0,121,119,1,0,0,0,121,120,1,0,0,0,122,7,1,0,0,0,123,124,
	5,1,0,0,124,9,1,0,0,0,125,127,5,2,0,0,126,128,5,52,0,0,127,126,1,0,0,0,
	128,129,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,11,1,0,0,0,131,133,
	5,3,0,0,132,134,5,52,0,0,133,132,1,0,0,0,134,135,1,0,0,0,135,133,1,0,0,
	0,135,136,1,0,0,0,136,13,1,0,0,0,137,138,5,52,0,0,138,139,5,4,0,0,139,140,
	5,51,0,0,140,15,1,0,0,0,141,142,5,5,0,0,142,143,5,52,0,0,143,144,5,6,0,
	0,144,146,5,51,0,0,145,147,5,7,0,0,146,145,1,0,0,0,146,147,1,0,0,0,147,
	148,1,0,0,0,148,149,3,80,40,0,149,150,5,8,0,0,150,17,1,0,0,0,151,153,5,
	5,0,0,152,154,5,52,0,0,153,152,1,0,0,0,154,155,1,0,0,0,155,153,1,0,0,0,
	155,156,1,0,0,0,156,19,1,0,0,0,157,159,5,9,0,0,158,160,5,52,0,0,159,158,
	1,0,0,0,160,161,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,21,1,0,0,0,
	163,164,5,52,0,0,164,166,5,10,0,0,165,167,5,11,0,0,166,165,1,0,0,0,166,
	167,1,0,0,0,167,169,1,0,0,0,168,170,5,52,0,0,169,168,1,0,0,0,170,171,1,
	0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,23,1,0,0,0,173,174,5,52,0,0,174,
	175,5,12,0,0,175,25,1,0,0,0,176,177,5,52,0,0,177,179,5,13,0,0,178,180,5,
	52,0,0,179,178,1,0,0,0,180,181,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,
	182,27,1,0,0,0,183,184,5,14,0,0,184,185,5,51,0,0,185,186,5,15,0,0,186,29,
	1,0,0,0,187,189,5,16,0,0,188,190,5,52,0,0,189,188,1,0,0,0,190,191,1,0,0,
	0,191,189,1,0,0,0,191,192,1,0,0,0,192,31,1,0,0,0,193,197,5,17,0,0,194,198,
	3,66,33,0,195,198,3,68,34,0,196,198,3,70,35,0,197,194,1,0,0,0,197,195,1,
	0,0,0,197,196,1,0,0,0,198,33,1,0,0,0,199,203,5,18,0,0,200,202,5,52,0,0,
	201,200,1,0,0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,35,
	1,0,0,0,205,203,1,0,0,0,206,207,5,47,0,0,207,208,3,38,19,0,208,209,5,46,
	0,0,209,37,1,0,0,0,210,224,3,40,20,0,211,224,3,42,21,0,212,224,3,44,22,
	0,213,224,3,46,23,0,214,224,3,48,24,0,215,224,3,50,25,0,216,224,3,52,26,
	0,217,224,3,54,27,0,218,224,3,56,28,0,219,224,3,58,29,0,220,224,3,60,30,
	0,221,224,3,62,31,0,222,224,3,64,32,0,223,210,1,0,0,0,223,211,1,0,0,0,223,
	212,1,0,0,0,223,213,1,0,0,0,223,214,1,0,0,0,223,215,1,0,0,0,223,216,1,0,
	0,0,223,217,1,0,0,0,223,218,1,0,0,0,223,219,1,0,0,0,223,220,1,0,0,0,223,
	221,1,0,0,0,223,222,1,0,0,0,224,39,1,0,0,0,225,226,5,19,0,0,226,41,1,0,
	0,0,227,228,5,20,0,0,228,229,5,52,0,0,229,230,5,21,0,0,230,231,5,51,0,0,
	231,43,1,0,0,0,232,233,5,52,0,0,233,235,5,22,0,0,234,236,5,52,0,0,235,234,
	1,0,0,0,236,237,1,0,0,0,237,235,1,0,0,0,237,238,1,0,0,0,238,243,1,0,0,0,
	239,244,3,72,36,0,240,244,3,74,37,0,241,244,3,76,38,0,242,244,5,23,0,0,
	243,239,1,0,0,0,243,240,1,0,0,0,243,241,1,0,0,0,243,242,1,0,0,0,244,45,
	1,0,0,0,245,246,5,52,0,0,246,248,5,24,0,0,247,249,5,52,0,0,248,247,1,0,
	0,0,249,250,1,0,0,0,250,248,1,0,0,0,250,251,1,0,0,0,251,252,1,0,0,0,252,
	253,3,78,39,0,253,47,1,0,0,0,254,255,5,52,0,0,255,259,5,25,0,0,256,260,
	3,72,36,0,257,260,3,74,37,0,258,260,3,76,38,0,259,256,1,0,0,0,259,257,1,
	0,0,0,259,258,1,0,0,0,260,49,1,0,0,0,261,262,5,26,0,0,262,263,5,51,0,0,
	263,264,5,27,0,0,264,51,1,0,0,0,265,266,5,28,0,0,266,53,1,0,0,0,267,269,
	5,29,0,0,268,270,5,52,0,0,269,268,1,0,0,0,270,271,1,0,0,0,271,269,1,0,0,
	0,271,272,1,0,0,0,272,55,1,0,0,0,273,274,5,30,0,0,274,57,1,0,0,0,275,277,
	5,31,0,0,276,278,5,52,0,0,277,276,1,0,0,0,278,279,1,0,0,0,279,277,1,0,0,
	0,279,280,1,0,0,0,280,59,1,0,0,0,281,282,5,32,0,0,282,283,5,52,0,0,283,
	284,5,33,0,0,284,61,1,0,0,0,285,287,5,34,0,0,286,288,5,52,0,0,287,286,1,
	0,0,0,288,289,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,63,1,0,0,0,291,
	293,5,35,0,0,292,294,5,52,0,0,293,292,1,0,0,0,294,295,1,0,0,0,295,293,1,
	0,0,0,295,296,1,0,0,0,296,65,1,0,0,0,297,298,5,36,0,0,298,299,5,51,0,0,
	299,300,5,37,0,0,300,67,1,0,0,0,301,302,5,36,0,0,302,303,5,51,0,0,303,304,
	5,38,0,0,304,69,1,0,0,0,305,306,5,36,0,0,306,307,5,51,0,0,307,308,5,39,
	0,0,308,71,1,0,0,0,309,310,3,80,40,0,310,311,5,37,0,0,311,312,5,40,0,0,
	312,313,3,80,40,0,313,314,5,8,0,0,314,73,1,0,0,0,315,316,3,80,40,0,316,
	317,5,38,0,0,317,318,5,41,0,0,318,319,3,80,40,0,319,320,5,8,0,0,320,75,
	1,0,0,0,321,322,3,80,40,0,322,323,5,39,0,0,323,324,5,42,0,0,324,325,3,80,
	40,0,325,326,5,8,0,0,326,77,1,0,0,0,327,328,3,80,40,0,328,329,5,43,0,0,
	329,330,5,44,0,0,330,331,3,80,40,0,331,332,5,8,0,0,332,79,1,0,0,0,333,334,
	5,25,0,0,334,339,5,51,0,0,335,336,5,45,0,0,336,339,5,51,0,0,337,339,5,51,
	0,0,338,333,1,0,0,0,338,335,1,0,0,0,338,337,1,0,0,0,339,81,1,0,0,0,26,85,
	91,97,102,121,129,135,146,155,161,166,171,181,191,197,203,223,237,243,250,
	259,271,279,289,295,338];

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
	public resolveDiscardAction(): ResolveDiscardActionContext {
		return this.getTypedRuleContext(ResolveDiscardActionContext, 0) as ResolveDiscardActionContext;
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
	public _WORD!: Token;
	public _card: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _WORD!: Token;
	public _card: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _player!: Token;
	public _turn!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(LogParser.WORD, 0);
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
	public _targetPlayer!: Token;
	public _damage!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signedNum(): SignedNumContext {
		return this.getTypedRuleContext(SignedNumContext, 0) as SignedNumContext;
	}
	public WORD(): TerminalNode {
		return this.getToken(LogParser.WORD, 0);
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
	public _WORD!: Token;
	public _base: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _WORD!: Token;
	public _card: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _player!: Token;
	public _WORD!: Token;
	public _card: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _player!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(LogParser.WORD, 0);
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
	public _player!: Token;
	public _WORD!: Token;
	public _card: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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


export class ResolveDiscardActionContext extends ParserRuleContext {
	public _cards!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
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


export class ActivateCardActionContext extends ParserRuleContext {
	public _WORD!: Token;
	public _card: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _player!: Token;
	public _turn!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(LogParser.WORD, 0);
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
	public _player!: Token;
	public _WORD!: Token;
	public _card: Token[] = [];
	public _ability!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _player!: Token;
	public _WORD!: Token;
	public _card: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public discardChange(): DiscardChangeContext {
		return this.getTypedRuleContext(DiscardChangeContext, 0) as DiscardChangeContext;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _player!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(LogParser.WORD, 0);
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
	public _WORD!: Token;
	public _card: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _WORD!: Token;
	public _card: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _player!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(LogParser.WORD, 0);
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
	public _WORD!: Token;
	public _base: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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
	public _WORD!: Token;
	public _event: Token[] = [];
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(LogParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(LogParser.WORD, i);
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


export class AddTradeContext extends ParserRuleContext {
	public _amount!: Token;
	constructor(parser?: LogParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
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
