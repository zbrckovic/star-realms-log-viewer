// Generated from C:/Users/zeljk/Develop/star-realms-log-viewer/src/log-language/Log.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `LogParser`.
 */
export default class LogListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LogParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.actionLine`.
	 * @param ctx the parse tree
	 */
	enterActionLine?: (ctx: ActionLineContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.actionLine`.
	 * @param ctx the parse tree
	 */
	exitActionLine?: (ctx: ActionLineContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.action`.
	 * @param ctx the parse tree
	 */
	enterAction?: (ctx: ActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.action`.
	 * @param ctx the parse tree
	 */
	exitAction?: (ctx: ActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.playAllCardsAction`.
	 * @param ctx the parse tree
	 */
	enterPlayAllCardsAction?: (ctx: PlayAllCardsActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.playAllCardsAction`.
	 * @param ctx the parse tree
	 */
	exitPlayAllCardsAction?: (ctx: PlayAllCardsActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.playOneCardAction`.
	 * @param ctx the parse tree
	 */
	enterPlayOneCardAction?: (ctx: PlayOneCardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.playOneCardAction`.
	 * @param ctx the parse tree
	 */
	exitPlayOneCardAction?: (ctx: PlayOneCardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.acquireCardAction`.
	 * @param ctx the parse tree
	 */
	enterAcquireCardAction?: (ctx: AcquireCardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.acquireCardAction`.
	 * @param ctx the parse tree
	 */
	exitAcquireCardAction?: (ctx: AcquireCardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.endTurnAction`.
	 * @param ctx the parse tree
	 */
	enterEndTurnAction?: (ctx: EndTurnActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.endTurnAction`.
	 * @param ctx the parse tree
	 */
	exitEndTurnAction?: (ctx: EndTurnActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.attackPlayerAction`.
	 * @param ctx the parse tree
	 */
	enterAttackPlayerAction?: (ctx: AttackPlayerActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.attackPlayerAction`.
	 * @param ctx the parse tree
	 */
	exitAttackPlayerAction?: (ctx: AttackPlayerActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.attackBaseAction`.
	 * @param ctx the parse tree
	 */
	enterAttackBaseAction?: (ctx: AttackBaseActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.attackBaseAction`.
	 * @param ctx the parse tree
	 */
	exitAttackBaseAction?: (ctx: AttackBaseActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.scrapSubjectCardAction`.
	 * @param ctx the parse tree
	 */
	enterScrapSubjectCardAction?: (ctx: ScrapSubjectCardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.scrapSubjectCardAction`.
	 * @param ctx the parse tree
	 */
	exitScrapSubjectCardAction?: (ctx: ScrapSubjectCardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.scrapObjectCardAction`.
	 * @param ctx the parse tree
	 */
	enterScrapObjectCardAction?: (ctx: ScrapObjectCardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.scrapObjectCardAction`.
	 * @param ctx the parse tree
	 */
	exitScrapObjectCardAction?: (ctx: ScrapObjectCardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.noScrapObjectCardAction`.
	 * @param ctx the parse tree
	 */
	enterNoScrapObjectCardAction?: (ctx: NoScrapObjectCardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.noScrapObjectCardAction`.
	 * @param ctx the parse tree
	 */
	exitNoScrapObjectCardAction?: (ctx: NoScrapObjectCardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.discardCardAction`.
	 * @param ctx the parse tree
	 */
	enterDiscardCardAction?: (ctx: DiscardCardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.discardCardAction`.
	 * @param ctx the parse tree
	 */
	exitDiscardCardAction?: (ctx: DiscardCardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.noDiscardCardAction`.
	 * @param ctx the parse tree
	 */
	enterNoDiscardCardAction?: (ctx: NoDiscardCardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.noDiscardCardAction`.
	 * @param ctx the parse tree
	 */
	exitNoDiscardCardAction?: (ctx: NoDiscardCardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.resolveDiscardAction`.
	 * @param ctx the parse tree
	 */
	enterResolveDiscardAction?: (ctx: ResolveDiscardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.resolveDiscardAction`.
	 * @param ctx the parse tree
	 */
	exitResolveDiscardAction?: (ctx: ResolveDiscardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.resolveDiscardAndRedrawAction`.
	 * @param ctx the parse tree
	 */
	enterResolveDiscardAndRedrawAction?: (ctx: ResolveDiscardAndRedrawActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.resolveDiscardAndRedrawAction`.
	 * @param ctx the parse tree
	 */
	exitResolveDiscardAndRedrawAction?: (ctx: ResolveDiscardAndRedrawActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.activateCardAction`.
	 * @param ctx the parse tree
	 */
	enterActivateCardAction?: (ctx: ActivateCardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.activateCardAction`.
	 * @param ctx the parse tree
	 */
	exitActivateCardAction?: (ctx: ActivateCardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.choseAction`.
	 * @param ctx the parse tree
	 */
	enterChoseAction?: (ctx: ChoseActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.choseAction`.
	 * @param ctx the parse tree
	 */
	exitChoseAction?: (ctx: ChoseActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.genericResolveAction`.
	 * @param ctx the parse tree
	 */
	enterGenericResolveAction?: (ctx: GenericResolveActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.genericResolveAction`.
	 * @param ctx the parse tree
	 */
	exitGenericResolveAction?: (ctx: GenericResolveActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.selectCardAction`.
	 * @param ctx the parse tree
	 */
	enterSelectCardAction?: (ctx: SelectCardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.selectCardAction`.
	 * @param ctx the parse tree
	 */
	exitSelectCardAction?: (ctx: SelectCardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.returnCardAction`.
	 * @param ctx the parse tree
	 */
	enterReturnCardAction?: (ctx: ReturnCardActionContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.returnCardAction`.
	 * @param ctx the parse tree
	 */
	exitReturnCardAction?: (ctx: ReturnCardActionContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.effectLine`.
	 * @param ctx the parse tree
	 */
	enterEffectLine?: (ctx: EffectLineContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.effectLine`.
	 * @param ctx the parse tree
	 */
	exitEffectLine?: (ctx: EffectLineContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.effect`.
	 * @param ctx the parse tree
	 */
	enterEffect?: (ctx: EffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.effect`.
	 * @param ctx the parse tree
	 */
	exitEffect?: (ctx: EffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.shuffledEffect`.
	 * @param ctx the parse tree
	 */
	enterShuffledEffect?: (ctx: ShuffledEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.shuffledEffect`.
	 * @param ctx the parse tree
	 */
	exitShuffledEffect?: (ctx: ShuffledEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.turnChangedEffect`.
	 * @param ctx the parse tree
	 */
	enterTurnChangedEffect?: (ctx: TurnChangedEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.turnChangedEffect`.
	 * @param ctx the parse tree
	 */
	exitTurnChangedEffect?: (ctx: TurnChangedEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.cardToOwnerEffect`.
	 * @param ctx the parse tree
	 */
	enterCardToOwnerEffect?: (ctx: CardToOwnerEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.cardToOwnerEffect`.
	 * @param ctx the parse tree
	 */
	exitCardToOwnerEffect?: (ctx: CardToOwnerEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.cardToOpponentEffect`.
	 * @param ctx the parse tree
	 */
	enterCardToOpponentEffect?: (ctx: CardToOpponentEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.cardToOpponentEffect`.
	 * @param ctx the parse tree
	 */
	exitCardToOpponentEffect?: (ctx: CardToOpponentEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.sideEffect`.
	 * @param ctx the parse tree
	 */
	enterSideEffect?: (ctx: SideEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.sideEffect`.
	 * @param ctx the parse tree
	 */
	exitSideEffect?: (ctx: SideEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.drewCardsEffect`.
	 * @param ctx the parse tree
	 */
	enterDrewCardsEffect?: (ctx: DrewCardsEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.drewCardsEffect`.
	 * @param ctx the parse tree
	 */
	exitDrewCardsEffect?: (ctx: DrewCardsEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.refreshedAllyIndicatorsEffect`.
	 * @param ctx the parse tree
	 */
	enterRefreshedAllyIndicatorsEffect?: (ctx: RefreshedAllyIndicatorsEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.refreshedAllyIndicatorsEffect`.
	 * @param ctx the parse tree
	 */
	exitRefreshedAllyIndicatorsEffect?: (ctx: RefreshedAllyIndicatorsEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.scrappedCardEffect`.
	 * @param ctx the parse tree
	 */
	enterScrappedCardEffect?: (ctx: ScrappedCardEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.scrappedCardEffect`.
	 * @param ctx the parse tree
	 */
	exitScrappedCardEffect?: (ctx: ScrappedCardEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.noMoreCardsToDiscardEffect`.
	 * @param ctx the parse tree
	 */
	enterNoMoreCardsToDiscardEffect?: (ctx: NoMoreCardsToDiscardEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.noMoreCardsToDiscardEffect`.
	 * @param ctx the parse tree
	 */
	exitNoMoreCardsToDiscardEffect?: (ctx: NoMoreCardsToDiscardEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.discardedCardEffect`.
	 * @param ctx the parse tree
	 */
	enterDiscardedCardEffect?: (ctx: DiscardedCardEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.discardedCardEffect`.
	 * @param ctx the parse tree
	 */
	exitDiscardedCardEffect?: (ctx: DiscardedCardEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.wonGameEffect`.
	 * @param ctx the parse tree
	 */
	enterWonGameEffect?: (ctx: WonGameEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.wonGameEffect`.
	 * @param ctx the parse tree
	 */
	exitWonGameEffect?: (ctx: WonGameEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.destroyedBaseEffect`.
	 * @param ctx the parse tree
	 */
	enterDestroyedBaseEffect?: (ctx: DestroyedBaseEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.destroyedBaseEffect`.
	 * @param ctx the parse tree
	 */
	exitDestroyedBaseEffect?: (ctx: DestroyedBaseEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.revealedEventEffect`.
	 * @param ctx the parse tree
	 */
	enterRevealedEventEffect?: (ctx: RevealedEventEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.revealedEventEffect`.
	 * @param ctx the parse tree
	 */
	exitRevealedEventEffect?: (ctx: RevealedEventEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.revealedEffect`.
	 * @param ctx the parse tree
	 */
	enterRevealedEffect?: (ctx: RevealedEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.revealedEffect`.
	 * @param ctx the parse tree
	 */
	exitRevealedEffect?: (ctx: RevealedEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.acquiredToTheTopOfDeckEffect`.
	 * @param ctx the parse tree
	 */
	enterAcquiredToTheTopOfDeckEffect?: (ctx: AcquiredToTheTopOfDeckEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.acquiredToTheTopOfDeckEffect`.
	 * @param ctx the parse tree
	 */
	exitAcquiredToTheTopOfDeckEffect?: (ctx: AcquiredToTheTopOfDeckEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.acquiredToHandEffect`.
	 * @param ctx the parse tree
	 */
	enterAcquiredToHandEffect?: (ctx: AcquiredToHandEffectContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.acquiredToHandEffect`.
	 * @param ctx the parse tree
	 */
	exitAcquiredToHandEffect?: (ctx: AcquiredToHandEffectContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.changedToOnTableImage`.
	 * @param ctx the parse tree
	 */
	enterChangedToOnTableImage?: (ctx: ChangedToOnTableImageContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.changedToOnTableImage`.
	 * @param ctx the parse tree
	 */
	exitChangedToOnTableImage?: (ctx: ChangedToOnTableImageContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.changedCardToCard`.
	 * @param ctx the parse tree
	 */
	enterChangedCardToCard?: (ctx: ChangedCardToCardContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.changedCardToCard`.
	 * @param ctx the parse tree
	 */
	exitChangedCardToCard?: (ctx: ChangedCardToCardContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.card`.
	 * @param ctx the parse tree
	 */
	enterCard?: (ctx: CardContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.card`.
	 * @param ctx the parse tree
	 */
	exitCard?: (ctx: CardContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.addTrade`.
	 * @param ctx the parse tree
	 */
	enterAddTrade?: (ctx: AddTradeContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.addTrade`.
	 * @param ctx the parse tree
	 */
	exitAddTrade?: (ctx: AddTradeContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.addCombat`.
	 * @param ctx the parse tree
	 */
	enterAddCombat?: (ctx: AddCombatContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.addCombat`.
	 * @param ctx the parse tree
	 */
	exitAddCombat?: (ctx: AddCombatContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.addAuthority`.
	 * @param ctx the parse tree
	 */
	enterAddAuthority?: (ctx: AddAuthorityContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.addAuthority`.
	 * @param ctx the parse tree
	 */
	exitAddAuthority?: (ctx: AddAuthorityContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.tradeChange`.
	 * @param ctx the parse tree
	 */
	enterTradeChange?: (ctx: TradeChangeContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.tradeChange`.
	 * @param ctx the parse tree
	 */
	exitTradeChange?: (ctx: TradeChangeContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.combatChange`.
	 * @param ctx the parse tree
	 */
	enterCombatChange?: (ctx: CombatChangeContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.combatChange`.
	 * @param ctx the parse tree
	 */
	exitCombatChange?: (ctx: CombatChangeContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.authorityChange`.
	 * @param ctx the parse tree
	 */
	enterAuthorityChange?: (ctx: AuthorityChangeContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.authorityChange`.
	 * @param ctx the parse tree
	 */
	exitAuthorityChange?: (ctx: AuthorityChangeContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.discardChange`.
	 * @param ctx the parse tree
	 */
	enterDiscardChange?: (ctx: DiscardChangeContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.discardChange`.
	 * @param ctx the parse tree
	 */
	exitDiscardChange?: (ctx: DiscardChangeContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.signedNum`.
	 * @param ctx the parse tree
	 */
	enterSignedNum?: (ctx: SignedNumContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.signedNum`.
	 * @param ctx the parse tree
	 */
	exitSignedNum?: (ctx: SignedNumContext) => void;
	/**
	 * Enter a parse tree produced by `LogParser.word`.
	 * @param ctx the parse tree
	 */
	enterWord?: (ctx: WordContext) => void;
	/**
	 * Exit a parse tree produced by `LogParser.word`.
	 * @param ctx the parse tree
	 */
	exitWord?: (ctx: WordContext) => void;
}

