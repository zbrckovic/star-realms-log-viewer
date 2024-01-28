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
	public static readonly NEWLINE = 44;
	public static readonly INDENT = 45;
	public static readonly SPACE = 46;
	public static readonly COLOR_OPEN = 47;
	public static readonly COLOR_CLOSE = 48;
	public static readonly NUM = 49;
	public static readonly WORD = 50;
	public static readonly UNKNOWN = 51;
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
	public static readonly RULE_effectLine = 17;
	public static readonly RULE_effect = 18;
	public static readonly RULE_shuffledEffect = 19;
	public static readonly RULE_turnChangedEffect = 20;
	public static readonly RULE_cardToOwnerEffect = 21;
	public static readonly RULE_cardToOpponentEffect = 22;
	public static readonly RULE_sideEffect = 23;
	public static readonly RULE_drewCardsEffect = 24;
	public static readonly RULE_refreshedAllyIndicatorsEffect = 25;
	public static readonly RULE_scrappedCardEffect = 26;
	public static readonly RULE_noMoreCardsToDiscardEffect = 27;
	public static readonly RULE_discardedCardEffect = 28;
	public static readonly RULE_wonGameEffect = 29;
	public static readonly RULE_destroyedBaseEffect = 30;
	public static readonly RULE_addTrade = 31;
	public static readonly RULE_addCombat = 32;
	public static readonly RULE_addAuthority = 33;
	public static readonly RULE_tradeChange = 34;
	public static readonly RULE_combatChange = 35;
	public static readonly RULE_authorityChange = 36;
	public static readonly RULE_discardChange = 37;
	public static readonly RULE_signedNum = 38;
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
                                                            "'Chose'", "'Shuffled discard pile to form new deck'", 
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
		"effectLine", "effect", "shuffledEffect", "turnChangedEffect", "cardToOwnerEffect", 
		"cardToOpponentEffect", "sideEffect", "drewCardsEffect", "refreshedAllyIndicatorsEffect", 
		"scrappedCardEffect", "noMoreCardsToDiscardEffect", "discardedCardEffect", 
		"wonGameEffect", "destroyedBaseEffect", "addTrade", "addCombat", "addAuthority", 
		"tradeChange", "combatChange", "authorityChange", "discardChange", "signedNum",
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
			this.state = 81;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 78;
					this.match(LogParser.NEWLINE);
					}
					}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 213550) !== 0) || _la===45 || _la===50) {
				{
				{
				this.state = 84;
				localctx._line = this.line();
				localctx._lines.push(localctx._line);
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===44) {
				{
				{
				this.state = 90;
				this.match(LogParser.NEWLINE);
				}
				}
				this.state = 95;
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
			this.state = 98;
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
			case 50:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 96;
				this.actionLine();
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 97;
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
			this.state = 100;
			this.action();
			this.state = 101;
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
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 103;
				this.playAllCardsAction();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 104;
				this.playOneCardAction();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 105;
				this.acquireCardAction();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 106;
				this.endTurnAction();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 107;
				this.attackPlayerAction();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 108;
				this.attackBaseAction();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 109;
				this.scrapSubjectCardAction();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 110;
				this.scrapObjectCardAction();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 111;
				this.noScrapObjectCardAction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 112;
				this.discardCardAction();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 113;
				this.resolveDiscardAction();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 114;
				this.activateCardAction();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 115;
				this.choseAction();
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
			this.state = 118;
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
			this.state = 120;
			this.match(LogParser.T__1);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 121;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
			this.state = 126;
			this.match(LogParser.T__2);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 127;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
			this.state = 132;
			localctx._player = this.match(LogParser.WORD);
			this.state = 133;
			this.match(LogParser.T__3);
			this.state = 134;
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
			this.state = 136;
			this.match(LogParser.T__4);
			this.state = 137;
			localctx._targetPlayer = this.match(LogParser.WORD);
			this.state = 138;
			this.match(LogParser.T__5);
			this.state = 139;
			localctx._damage = this.match(LogParser.NUM);
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 140;
				this.match(LogParser.T__6);
				}
			}

			this.state = 143;
			this.signedNum();
			this.state = 144;
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
			this.state = 146;
			this.match(LogParser.T__4);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 147;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._base.push(localctx._WORD);
				}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
			this.state = 152;
			this.match(LogParser.T__8);
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 153;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
			this.state = 158;
			localctx._player = this.match(LogParser.WORD);
			this.state = 159;
			this.match(LogParser.T__9);
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 160;
				this.match(LogParser.T__10);
				}
			}

			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 163;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
			this.state = 168;
			localctx._player = this.match(LogParser.WORD);
			this.state = 169;
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
			this.state = 171;
			localctx._player = this.match(LogParser.WORD);
			this.state = 172;
			this.match(LogParser.T__12);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 173;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
			this.state = 178;
			this.match(LogParser.T__13);
			this.state = 179;
			localctx._cards = this.match(LogParser.NUM);
			this.state = 180;
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
			this.state = 182;
			this.match(LogParser.T__15);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 183;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
			this.state = 188;
			this.match(LogParser.T__16);
			this.state = 192;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 189;
				this.addTrade();
				}
				break;
			case 2:
				{
				this.state = 190;
				this.addCombat();
				}
				break;
			case 3:
				{
				this.state = 191;
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
	public effectLine(): EffectLineContext {
		let localctx: EffectLineContext = new EffectLineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, LogParser.RULE_effectLine);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this.match(LogParser.INDENT);
			this.state = 195;
			this.effect();
			this.state = 196;
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
		this.enterRule(localctx, 36, LogParser.RULE_effect);
		try {
			this.state = 210;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 198;
				this.shuffledEffect();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 199;
				this.turnChangedEffect();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 200;
				this.cardToOwnerEffect();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 201;
				this.cardToOpponentEffect();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 202;
				this.sideEffect();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 203;
				this.drewCardsEffect();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 204;
				this.refreshedAllyIndicatorsEffect();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 205;
				this.scrappedCardEffect();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 206;
				this.noMoreCardsToDiscardEffect();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 207;
				this.discardedCardEffect();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 208;
				this.wonGameEffect();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 209;
				this.destroyedBaseEffect();
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
		this.enterRule(localctx, 38, LogParser.RULE_shuffledEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 212;
			this.match(LogParser.T__17);
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
		this.enterRule(localctx, 40, LogParser.RULE_turnChangedEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 214;
			this.match(LogParser.T__18);
			this.state = 215;
			localctx._player = this.match(LogParser.WORD);
			this.state = 216;
			this.match(LogParser.T__19);
			this.state = 217;
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
		this.enterRule(localctx, 42, LogParser.RULE_cardToOwnerEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			localctx._player = this.match(LogParser.WORD);
			this.state = 220;
			this.match(LogParser.T__20);
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 221;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
			this.state = 230;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 226;
				this.tradeChange();
				}
				break;
			case 2:
				{
				this.state = 227;
				this.combatChange();
				}
				break;
			case 3:
				{
				this.state = 228;
				this.authorityChange();
				}
				break;
			case 4:
				{
				this.state = 229;
				localctx._ability = this.match(LogParser.T__21);
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
		this.enterRule(localctx, 44, LogParser.RULE_cardToOpponentEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			localctx._player = this.match(LogParser.WORD);
			this.state = 233;
			this.match(LogParser.T__22);
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
			} while (_la===50);
			this.state = 239;
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
		this.enterRule(localctx, 46, LogParser.RULE_sideEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 241;
			localctx._player = this.match(LogParser.WORD);
			this.state = 242;
			this.match(LogParser.T__23);
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 243;
				this.tradeChange();
				}
				break;
			case 2:
				{
				this.state = 244;
				this.combatChange();
				}
				break;
			case 3:
				{
				this.state = 245;
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
		this.enterRule(localctx, 48, LogParser.RULE_drewCardsEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 248;
			this.match(LogParser.T__24);
			this.state = 249;
			localctx._cards = this.match(LogParser.NUM);
			this.state = 250;
			this.match(LogParser.T__25);
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
		this.enterRule(localctx, 50, LogParser.RULE_refreshedAllyIndicatorsEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 252;
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
	public scrappedCardEffect(): ScrappedCardEffectContext {
		let localctx: ScrappedCardEffectContext = new ScrappedCardEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LogParser.RULE_scrappedCardEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 254;
			this.match(LogParser.T__27);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 255;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
		this.enterRule(localctx, 54, LogParser.RULE_noMoreCardsToDiscardEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 260;
			this.match(LogParser.T__28);
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
		this.enterRule(localctx, 56, LogParser.RULE_discardedCardEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 262;
			this.match(LogParser.T__29);
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 263;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._card.push(localctx._WORD);
				}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
		this.enterRule(localctx, 58, LogParser.RULE_wonGameEffect);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 268;
			this.match(LogParser.T__30);
			this.state = 269;
			localctx._player = this.match(LogParser.WORD);
			this.state = 270;
			this.match(LogParser.T__31);
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
		this.enterRule(localctx, 60, LogParser.RULE_destroyedBaseEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 272;
			this.match(LogParser.T__32);
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 273;
				localctx._WORD = this.match(LogParser.WORD);
				localctx._base.push(localctx._WORD);
				}
				}
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===50);
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
		this.enterRule(localctx, 62, LogParser.RULE_addTrade);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 278;
			this.match(LogParser.T__33);
			this.state = 279;
			localctx._amount = this.match(LogParser.NUM);
			this.state = 280;
			this.match(LogParser.T__34);
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
		this.enterRule(localctx, 64, LogParser.RULE_addCombat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 282;
			this.match(LogParser.T__33);
			this.state = 283;
			localctx._amount = this.match(LogParser.NUM);
			this.state = 284;
			this.match(LogParser.T__35);
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
		this.enterRule(localctx, 66, LogParser.RULE_addAuthority);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 286;
			this.match(LogParser.T__33);
			this.state = 287;
			localctx._amount = this.match(LogParser.NUM);
			this.state = 288;
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
	public tradeChange(): TradeChangeContext {
		let localctx: TradeChangeContext = new TradeChangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, LogParser.RULE_tradeChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 290;
			localctx._change = this.signedNum();
			this.state = 291;
			this.match(LogParser.T__34);
			this.state = 292;
			this.match(LogParser.T__37);
			this.state = 293;
			localctx._final = this.signedNum();
			this.state = 294;
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
		this.enterRule(localctx, 70, LogParser.RULE_combatChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 296;
			localctx._change = this.signedNum();
			this.state = 297;
			this.match(LogParser.T__35);
			this.state = 298;
			this.match(LogParser.T__38);
			this.state = 299;
			localctx._final = this.signedNum();
			this.state = 300;
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
		this.enterRule(localctx, 72, LogParser.RULE_authorityChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 302;
			localctx._change = this.signedNum();
			this.state = 303;
			this.match(LogParser.T__36);
			this.state = 304;
			this.match(LogParser.T__39);
			this.state = 305;
			localctx._final = this.signedNum();
			this.state = 306;
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
		this.enterRule(localctx, 74, LogParser.RULE_discardChange);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 308;
			localctx._change = this.signedNum();
			this.state = 309;
			this.match(LogParser.T__40);
			this.state = 310;
			this.match(LogParser.T__41);
			this.state = 311;
			localctx._final = this.signedNum();
			this.state = 312;
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
		this.enterRule(localctx, 76, LogParser.RULE_signedNum);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 314;
				localctx._sign = this.match(LogParser.T__23);
				this.state = 315;
				this.match(LogParser.NUM);
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 316;
				localctx._sign = this.match(LogParser.T__42);
				this.state = 317;
				this.match(LogParser.NUM);
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 318;
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

	public static readonly _serializedATN: number[] = [4,1,51,322,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,
	0,5,0,80,8,0,10,0,12,0,83,9,0,1,0,5,0,86,8,0,10,0,12,0,89,9,0,1,0,5,0,92,
	8,0,10,0,12,0,95,9,0,1,1,1,1,3,1,99,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,117,8,3,1,4,1,4,1,5,1,5,4,5,123,8,5,
	11,5,12,5,124,1,6,1,6,4,6,129,8,6,11,6,12,6,130,1,7,1,7,1,7,1,7,1,8,1,8,
	1,8,1,8,1,8,3,8,142,8,8,1,8,1,8,1,8,1,9,1,9,4,9,149,8,9,11,9,12,9,150,1,
	10,1,10,4,10,155,8,10,11,10,12,10,156,1,11,1,11,1,11,3,11,162,8,11,1,11,
	4,11,165,8,11,11,11,12,11,166,1,12,1,12,1,12,1,13,1,13,1,13,4,13,175,8,
	13,11,13,12,13,176,1,14,1,14,1,14,1,14,1,15,1,15,4,15,185,8,15,11,15,12,
	15,186,1,16,1,16,1,16,1,16,3,16,193,8,16,1,17,1,17,1,17,1,17,1,18,1,18,
	1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,211,8,18,1,19,1,
	19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,4,21,223,8,21,11,21,12,21,224,
	1,21,1,21,1,21,1,21,3,21,231,8,21,1,22,1,22,1,22,4,22,236,8,22,11,22,12,
	22,237,1,22,1,22,1,23,1,23,1,23,1,23,1,23,3,23,247,8,23,1,24,1,24,1,24,
	1,24,1,25,1,25,1,26,1,26,4,26,257,8,26,11,26,12,26,258,1,27,1,27,1,28,1,
	28,4,28,265,8,28,11,28,12,28,266,1,29,1,29,1,29,1,29,1,30,1,30,4,30,275,
	8,30,11,30,12,30,276,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,
	1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,
	36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,
	1,38,1,38,3,38,320,8,38,1,38,0,0,39,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
	28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
	76,0,0,332,0,81,1,0,0,0,2,98,1,0,0,0,4,100,1,0,0,0,6,116,1,0,0,0,8,118,
	1,0,0,0,10,120,1,0,0,0,12,126,1,0,0,0,14,132,1,0,0,0,16,136,1,0,0,0,18,
	146,1,0,0,0,20,152,1,0,0,0,22,158,1,0,0,0,24,168,1,0,0,0,26,171,1,0,0,0,
	28,178,1,0,0,0,30,182,1,0,0,0,32,188,1,0,0,0,34,194,1,0,0,0,36,210,1,0,
	0,0,38,212,1,0,0,0,40,214,1,0,0,0,42,219,1,0,0,0,44,232,1,0,0,0,46,241,
	1,0,0,0,48,248,1,0,0,0,50,252,1,0,0,0,52,254,1,0,0,0,54,260,1,0,0,0,56,
	262,1,0,0,0,58,268,1,0,0,0,60,272,1,0,0,0,62,278,1,0,0,0,64,282,1,0,0,0,
	66,286,1,0,0,0,68,290,1,0,0,0,70,296,1,0,0,0,72,302,1,0,0,0,74,308,1,0,
	0,0,76,319,1,0,0,0,78,80,5,44,0,0,79,78,1,0,0,0,80,83,1,0,0,0,81,79,1,0,
	0,0,81,82,1,0,0,0,82,87,1,0,0,0,83,81,1,0,0,0,84,86,3,2,1,0,85,84,1,0,0,
	0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,93,1,0,0,0,89,87,1,0,0,0,
	90,92,5,44,0,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,
	94,1,1,0,0,0,95,93,1,0,0,0,96,99,3,4,2,0,97,99,3,34,17,0,98,96,1,0,0,0,
	98,97,1,0,0,0,99,3,1,0,0,0,100,101,3,6,3,0,101,102,5,44,0,0,102,5,1,0,0,
	0,103,117,3,8,4,0,104,117,3,10,5,0,105,117,3,12,6,0,106,117,3,14,7,0,107,
	117,3,16,8,0,108,117,3,18,9,0,109,117,3,20,10,0,110,117,3,22,11,0,111,117,
	3,24,12,0,112,117,3,26,13,0,113,117,3,28,14,0,114,117,3,30,15,0,115,117,
	3,32,16,0,116,103,1,0,0,0,116,104,1,0,0,0,116,105,1,0,0,0,116,106,1,0,0,
	0,116,107,1,0,0,0,116,108,1,0,0,0,116,109,1,0,0,0,116,110,1,0,0,0,116,111,
	1,0,0,0,116,112,1,0,0,0,116,113,1,0,0,0,116,114,1,0,0,0,116,115,1,0,0,0,
	117,7,1,0,0,0,118,119,5,1,0,0,119,9,1,0,0,0,120,122,5,2,0,0,121,123,5,50,
	0,0,122,121,1,0,0,0,123,124,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,
	11,1,0,0,0,126,128,5,3,0,0,127,129,5,50,0,0,128,127,1,0,0,0,129,130,1,0,
	0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,13,1,0,0,0,132,133,5,50,0,0,133,
	134,5,4,0,0,134,135,5,49,0,0,135,15,1,0,0,0,136,137,5,5,0,0,137,138,5,50,
	0,0,138,139,5,6,0,0,139,141,5,49,0,0,140,142,5,7,0,0,141,140,1,0,0,0,141,
	142,1,0,0,0,142,143,1,0,0,0,143,144,3,76,38,0,144,145,5,8,0,0,145,17,1,
	0,0,0,146,148,5,5,0,0,147,149,5,50,0,0,148,147,1,0,0,0,149,150,1,0,0,0,
	150,148,1,0,0,0,150,151,1,0,0,0,151,19,1,0,0,0,152,154,5,9,0,0,153,155,
	5,50,0,0,154,153,1,0,0,0,155,156,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,
	0,157,21,1,0,0,0,158,159,5,50,0,0,159,161,5,10,0,0,160,162,5,11,0,0,161,
	160,1,0,0,0,161,162,1,0,0,0,162,164,1,0,0,0,163,165,5,50,0,0,164,163,1,
	0,0,0,165,166,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,23,1,0,0,0,168,
	169,5,50,0,0,169,170,5,12,0,0,170,25,1,0,0,0,171,172,5,50,0,0,172,174,5,
	13,0,0,173,175,5,50,0,0,174,173,1,0,0,0,175,176,1,0,0,0,176,174,1,0,0,0,
	176,177,1,0,0,0,177,27,1,0,0,0,178,179,5,14,0,0,179,180,5,49,0,0,180,181,
	5,15,0,0,181,29,1,0,0,0,182,184,5,16,0,0,183,185,5,50,0,0,184,183,1,0,0,
	0,185,186,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,31,1,0,0,0,188,192,
	5,17,0,0,189,193,3,62,31,0,190,193,3,64,32,0,191,193,3,66,33,0,192,189,
	1,0,0,0,192,190,1,0,0,0,192,191,1,0,0,0,193,33,1,0,0,0,194,195,5,45,0,0,
	195,196,3,36,18,0,196,197,5,44,0,0,197,35,1,0,0,0,198,211,3,38,19,0,199,
	211,3,40,20,0,200,211,3,42,21,0,201,211,3,44,22,0,202,211,3,46,23,0,203,
	211,3,48,24,0,204,211,3,50,25,0,205,211,3,52,26,0,206,211,3,54,27,0,207,
	211,3,56,28,0,208,211,3,58,29,0,209,211,3,60,30,0,210,198,1,0,0,0,210,199,
	1,0,0,0,210,200,1,0,0,0,210,201,1,0,0,0,210,202,1,0,0,0,210,203,1,0,0,0,
	210,204,1,0,0,0,210,205,1,0,0,0,210,206,1,0,0,0,210,207,1,0,0,0,210,208,
	1,0,0,0,210,209,1,0,0,0,211,37,1,0,0,0,212,213,5,18,0,0,213,39,1,0,0,0,
	214,215,5,19,0,0,215,216,5,50,0,0,216,217,5,20,0,0,217,218,5,49,0,0,218,
	41,1,0,0,0,219,220,5,50,0,0,220,222,5,21,0,0,221,223,5,50,0,0,222,221,1,
	0,0,0,223,224,1,0,0,0,224,222,1,0,0,0,224,225,1,0,0,0,225,230,1,0,0,0,226,
	231,3,68,34,0,227,231,3,70,35,0,228,231,3,72,36,0,229,231,5,22,0,0,230,
	226,1,0,0,0,230,227,1,0,0,0,230,228,1,0,0,0,230,229,1,0,0,0,231,43,1,0,
	0,0,232,233,5,50,0,0,233,235,5,23,0,0,234,236,5,50,0,0,235,234,1,0,0,0,
	236,237,1,0,0,0,237,235,1,0,0,0,237,238,1,0,0,0,238,239,1,0,0,0,239,240,
	3,74,37,0,240,45,1,0,0,0,241,242,5,50,0,0,242,246,5,24,0,0,243,247,3,68,
	34,0,244,247,3,70,35,0,245,247,3,72,36,0,246,243,1,0,0,0,246,244,1,0,0,
	0,246,245,1,0,0,0,247,47,1,0,0,0,248,249,5,25,0,0,249,250,5,49,0,0,250,
	251,5,26,0,0,251,49,1,0,0,0,252,253,5,27,0,0,253,51,1,0,0,0,254,256,5,28,
	0,0,255,257,5,50,0,0,256,255,1,0,0,0,257,258,1,0,0,0,258,256,1,0,0,0,258,
	259,1,0,0,0,259,53,1,0,0,0,260,261,5,29,0,0,261,55,1,0,0,0,262,264,5,30,
	0,0,263,265,5,50,0,0,264,263,1,0,0,0,265,266,1,0,0,0,266,264,1,0,0,0,266,
	267,1,0,0,0,267,57,1,0,0,0,268,269,5,31,0,0,269,270,5,50,0,0,270,271,5,
	32,0,0,271,59,1,0,0,0,272,274,5,33,0,0,273,275,5,50,0,0,274,273,1,0,0,0,
	275,276,1,0,0,0,276,274,1,0,0,0,276,277,1,0,0,0,277,61,1,0,0,0,278,279,
	5,34,0,0,279,280,5,49,0,0,280,281,5,35,0,0,281,63,1,0,0,0,282,283,5,34,
	0,0,283,284,5,49,0,0,284,285,5,36,0,0,285,65,1,0,0,0,286,287,5,34,0,0,287,
	288,5,49,0,0,288,289,5,37,0,0,289,67,1,0,0,0,290,291,3,76,38,0,291,292,
	5,35,0,0,292,293,5,38,0,0,293,294,3,76,38,0,294,295,5,8,0,0,295,69,1,0,
	0,0,296,297,3,76,38,0,297,298,5,36,0,0,298,299,5,39,0,0,299,300,3,76,38,
	0,300,301,5,8,0,0,301,71,1,0,0,0,302,303,3,76,38,0,303,304,5,37,0,0,304,
	305,5,40,0,0,305,306,3,76,38,0,306,307,5,8,0,0,307,73,1,0,0,0,308,309,3,
	76,38,0,309,310,5,41,0,0,310,311,5,42,0,0,311,312,3,76,38,0,312,313,5,8,
	0,0,313,75,1,0,0,0,314,315,5,24,0,0,315,320,5,49,0,0,316,317,5,43,0,0,317,
	320,5,49,0,0,318,320,5,49,0,0,319,314,1,0,0,0,319,316,1,0,0,0,319,318,1,
	0,0,0,320,77,1,0,0,0,24,81,87,93,98,116,124,130,141,150,156,161,166,176,
	186,192,210,224,230,237,246,258,266,276,319];

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
