// Generated from C:/Users/zeljk/Develop/star-realms-log-viewer/src/log-language/Log.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { StartContext } from "./LogParser";
import { LineContext } from "./LogParser";
import { ActionLineContext } from "./LogParser";
import { ActionContext } from "./LogParser";
import { PlayAllCardsActionContext } from "./LogParser";
import { PlayOneCardActionContext } from "./LogParser";
import { AcquireCardActionContext } from "./LogParser";
import { EndTurnActionContext } from "./LogParser";
import { AttackPlayerActionContext } from "./LogParser";
import { AttackBaseActionContext } from "./LogParser";
import { ScrapSubjectCardActionContext } from "./LogParser";
import { ScrapObjectCardActionContext } from "./LogParser";
import { NoScrapObjectCardActionContext } from "./LogParser";
import { DiscardCardActionContext } from "./LogParser";
import { NoDiscardCardActionContext } from "./LogParser";
import { ResolveDiscardActionContext } from "./LogParser";
import { ResolveDiscardAndRedrawActionContext } from "./LogParser";
import { ActivateCardActionContext } from "./LogParser";
import { ChoseActionContext } from "./LogParser";
import { GenericResolveActionContext } from "./LogParser";
import { SelectCardActionContext } from "./LogParser";
import { ReturnCardActionContext } from "./LogParser";
import { EffectLineContext } from "./LogParser";
import { EffectContext } from "./LogParser";
import { ShuffledEffectContext } from "./LogParser";
import { TurnChangedEffectContext } from "./LogParser";
import { CardToOwnerEffectContext } from "./LogParser";
import { CardToOpponentEffectContext } from "./LogParser";
import { SideEffectContext } from "./LogParser";
import { DrewCardsEffectContext } from "./LogParser";
import { RefreshedAllyIndicatorsEffectContext } from "./LogParser";
import { ScrappedCardEffectContext } from "./LogParser";
import { NoMoreCardsToDiscardEffectContext } from "./LogParser";
import { DiscardedCardEffectContext } from "./LogParser";
import { WonGameEffectContext } from "./LogParser";
import { DestroyedBaseEffectContext } from "./LogParser";
import { RevealedEventEffectContext } from "./LogParser";
import { RevealedEffectContext } from "./LogParser";
import { AcquiredToTheTopOfDeckEffectContext } from "./LogParser";
import { AcquiredToHandEffectContext } from "./LogParser";
import { ChangedToOnTableImageContext } from "./LogParser";
import { ChangedCardToCardContext } from "./LogParser";
import { CardContext } from "./LogParser";
import { AddTradeContext } from "./LogParser";
import { AddCombatContext } from "./LogParser";
import { AddAuthorityContext } from "./LogParser";
import { TradeChangeContext } from "./LogParser";
import { CombatChangeContext } from "./LogParser";
import { AuthorityChangeContext } from "./LogParser";
import { DiscardChangeContext } from "./LogParser";
import { SignedNumContext } from "./LogParser";
import { WordContext } from "./LogParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LogParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class LogVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LogParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.actionLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionLine?: (ctx: ActionLineContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.playAllCardsAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlayAllCardsAction?: (ctx: PlayAllCardsActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.playOneCardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlayOneCardAction?: (ctx: PlayOneCardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.acquireCardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcquireCardAction?: (ctx: AcquireCardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.endTurnAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndTurnAction?: (ctx: EndTurnActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.attackPlayerAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttackPlayerAction?: (ctx: AttackPlayerActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.attackBaseAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttackBaseAction?: (ctx: AttackBaseActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.scrapSubjectCardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScrapSubjectCardAction?: (ctx: ScrapSubjectCardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.scrapObjectCardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScrapObjectCardAction?: (ctx: ScrapObjectCardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.noScrapObjectCardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoScrapObjectCardAction?: (ctx: NoScrapObjectCardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.discardCardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiscardCardAction?: (ctx: DiscardCardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.noDiscardCardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoDiscardCardAction?: (ctx: NoDiscardCardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.resolveDiscardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResolveDiscardAction?: (ctx: ResolveDiscardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.resolveDiscardAndRedrawAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResolveDiscardAndRedrawAction?: (ctx: ResolveDiscardAndRedrawActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.activateCardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivateCardAction?: (ctx: ActivateCardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.choseAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoseAction?: (ctx: ChoseActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.genericResolveAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericResolveAction?: (ctx: GenericResolveActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.selectCardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectCardAction?: (ctx: SelectCardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.returnCardAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnCardAction?: (ctx: ReturnCardActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.effectLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffectLine?: (ctx: EffectLineContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.effect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffect?: (ctx: EffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.shuffledEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShuffledEffect?: (ctx: ShuffledEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.turnChangedEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTurnChangedEffect?: (ctx: TurnChangedEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.cardToOwnerEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCardToOwnerEffect?: (ctx: CardToOwnerEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.cardToOpponentEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCardToOpponentEffect?: (ctx: CardToOpponentEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.sideEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSideEffect?: (ctx: SideEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.drewCardsEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrewCardsEffect?: (ctx: DrewCardsEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.refreshedAllyIndicatorsEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshedAllyIndicatorsEffect?: (ctx: RefreshedAllyIndicatorsEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.scrappedCardEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScrappedCardEffect?: (ctx: ScrappedCardEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.noMoreCardsToDiscardEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoMoreCardsToDiscardEffect?: (ctx: NoMoreCardsToDiscardEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.discardedCardEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiscardedCardEffect?: (ctx: DiscardedCardEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.wonGameEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWonGameEffect?: (ctx: WonGameEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.destroyedBaseEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestroyedBaseEffect?: (ctx: DestroyedBaseEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.revealedEventEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevealedEventEffect?: (ctx: RevealedEventEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.revealedEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevealedEffect?: (ctx: RevealedEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.acquiredToTheTopOfDeckEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcquiredToTheTopOfDeckEffect?: (ctx: AcquiredToTheTopOfDeckEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.acquiredToHandEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcquiredToHandEffect?: (ctx: AcquiredToHandEffectContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.changedToOnTableImage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangedToOnTableImage?: (ctx: ChangedToOnTableImageContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.changedCardToCard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangedCardToCard?: (ctx: ChangedCardToCardContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.card`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCard?: (ctx: CardContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.addTrade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddTrade?: (ctx: AddTradeContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.addCombat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddCombat?: (ctx: AddCombatContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.addAuthority`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddAuthority?: (ctx: AddAuthorityContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.tradeChange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTradeChange?: (ctx: TradeChangeContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.combatChange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCombatChange?: (ctx: CombatChangeContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.authorityChange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthorityChange?: (ctx: AuthorityChangeContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.discardChange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiscardChange?: (ctx: DiscardChangeContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.signedNum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedNum?: (ctx: SignedNumContext) => Result;
	/**
	 * Visit a parse tree produced by `LogParser.word`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWord?: (ctx: WordContext) => Result;
}

