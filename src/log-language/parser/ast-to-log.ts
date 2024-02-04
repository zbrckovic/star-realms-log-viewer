import {
    AcquireCardActionContext,
    AcquiredToHandEffectContext,
    AcquiredToTheTopOfDeckEffectContext,
    ActionContext,
    ActionLineContext,
    ActivateCardActionContext,
    AddAuthorityContext,
    AddCombatContext,
    AddTradeContext,
    AttackBaseActionContext,
    AttackPlayerActionContext,
    AuthorityChangeContext,
    CardContext,
    CardToOpponentEffectContext,
    CardToOwnerEffectContext,
    ChangedCardToCardContext,
    ChangedToOnTableImageContext,
    ChoseActionContext,
    CombatChangeContext,
    DestroyedBaseEffectContext,
    DiscardCardActionContext,
    DiscardChangeContext,
    DiscardedCardEffectContext,
    DrewCardsEffectContext,
    EffectContext,
    EffectLineContext,
    EndTurnActionContext,
    GenericResolveActionContext,
    LineContext,
    NoDiscardCardActionContext,
    NoMoreCardsToDiscardEffectContext,
    NoScrapObjectCardActionContext,
    PlayAllCardsActionContext,
    PlayOneCardActionContext,
    RefreshedAllyIndicatorsEffectContext,
    ResolveDiscardActionContext,
    ResolveDiscardAndRedrawActionContext,
    ReturnCardActionContext,
    RevealedEffectContext,
    RevealedEventEffectContext,
    ScrapObjectCardActionContext,
    ScrappedCardEffectContext,
    ScrapSubjectCardActionContext,
    SelectCardActionContext,
    ShuffledEffectContext,
    SideEffectContext,
    SignedNumContext,
    StartContext,
    TradeChangeContext,
    TurnChangedEffectContext,
    WonGameEffectContext,
    WordContext
} from 'log-language/antlr-generated/LogParser'
import LogVisitor from 'log-language/antlr-generated/LogVisitor'
import { Log } from 'log-language/log'
import {
    AcquireCardAction,
    Action,
    ActivateCardAction,
    AttackBaseAction,
    AttackPlayerAction,
    ChoseAction,
    DiscardCardAction,
    EndTurnAction,
    GenericResolveAction,
    NoDiscardCardAction,
    NoScrapObjectCardAction,
    PlayAllCardsAction,
    PlayOneCardAction,
    ResolveDiscardAction,
    ResolveDiscardAndRedrawAction,
    ReturnCardAction,
    ScrapObjectCardAction,
    ScrapSubjectCardAction,
    SelectCardAction
} from 'log-language/log/actions'
import {
    AcquiredToHandEffect,
    AcquiredToTheTopOfDeckEffect,
    CardToOpponentEffect,
    CardToOwnerEffect,
    ChangedCardToCardEffect,
    ChangedToOnTableImageEffect,
    DestroyedBaseEffect,
    DiscardedCardEffect,
    DrewCardsEffect,
    Effect,
    NoMoreCardsToDiscardEffect,
    RefreshedAllyIndicatorsEffect,
    RevealedEffect,
    RevealedEventEffect,
    ScrappedCardEffect,
    ShuffledEffect,
    SideEffect,
    StatChange,
    TurnChangedEffect,
    WonGameEffect
} from 'log-language/log/effects'

export const astToLog = (ast: StartContext): Log => {
    const visitor = new Visitor()
    return ast.accept(visitor)
}


class Visitor extends LogVisitor<any> {
    visitStart = (ctx: StartContext): Log => {
        const lines = ctx._lines.map(line => this.visitLine(line))
        return { lines }
    }

    visitLine = (ctx: LineContext): Action | Effect => {
        if (ctx.actionLine()) {
            return this.visitActionLine(ctx.actionLine())
        } else if (ctx.effectLine()) {
            return this.visitEffectLine(ctx.effectLine())
        } else {
            throw new Error('unknown line')
        }
    }

    // region Actions
    visitActionLine = (ctx: ActionLineContext): Action => {
        return this.visitAction(ctx.action())
    }

    visitAction = (ctx: ActionContext): Action => (
        ctx.playAllCardsAction() ??
        ctx.playOneCardAction() ??
        ctx.acquireCardAction() ??
        ctx.endTurnAction() ??
        ctx.attackPlayerAction() ??
        ctx.attackBaseAction() ??
        ctx.scrapSubjectCardAction() ??
        ctx.scrapObjectCardAction() ??
        ctx.noScrapObjectCardAction() ??
        ctx.discardCardAction() ??
        ctx.noDiscardCardAction() ??
        ctx.resolveDiscardAction() ??
        ctx.resolveDiscardAndRedrawAction() ??
        ctx.activateCardAction() ??
        ctx.choseAction() ??
        ctx.genericResolveAction() ??
        ctx.selectCardAction() ??
        ctx.returnCardAction()
    ).accept(this)

    visitPlayAllCardsAction = (_ctx: PlayAllCardsActionContext): PlayAllCardsAction => {
        return { type: 'action', subtype: 'play all cards' }
    }

    visitPlayOneCardAction = (ctx: PlayOneCardActionContext): PlayOneCardAction => {
        const card = this.visitCard(ctx.card())
        return { type: 'action', subtype: 'play card', card }
    }

    visitAcquireCardAction = (ctx: AcquireCardActionContext): AcquireCardAction => {
        const card = this.visitCard(ctx.card())
        return { type: 'action', subtype: 'acquire card', card }
    }

    visitEndTurnAction = (ctx: EndTurnActionContext): EndTurnAction => {
        const player = this.visitWord(ctx._player)
        const turn = Number(ctx._turn.text)
        return { type: 'action', subtype: 'end turn', player, turn }
    }

    visitAttackPlayerAction = (ctx: AttackPlayerActionContext): AttackPlayerAction => {
        const targetPlayer = this.visitWord(ctx._targetPlayer)
        const damage = Number(ctx._damage.text)
        const newAuthority = this.visitSignedNum(ctx.signedNum())
        return { type: 'action', subtype: 'attack player', targetPlayer, damage, newAuthority }
    }

    visitAttackBaseAction = (ctx: AttackBaseActionContext): AttackBaseAction => {
        const base = this.visitCard(ctx.card())
        return { type: 'action', subtype: 'attack base', base }
    }

    visitScrapSubjectCardAction = (ctx: ScrapSubjectCardActionContext): ScrapSubjectCardAction => {
        const card = this.visitCard(ctx.card())
        return { type: 'action', subtype: 'scrap subject card', card }
    }

    visitScrapObjectCardAction = (ctx: ScrapObjectCardActionContext): ScrapObjectCardAction => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())
        return { type: 'action', subtype: 'scrap object card', player, card }
    }

    visitNoScrapObjectCardAction = (ctx: NoScrapObjectCardActionContext): NoScrapObjectCardAction => {
        const player = this.visitWord(ctx._player)
        return { type: 'action', subtype: 'no scrap object card', player }
    }

    visitDiscardCardAction = (ctx: DiscardCardActionContext): DiscardCardAction => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())
        return { type: 'action', subtype: 'discard card', player, card }
    }

    visitNoDiscardCardAction = (ctx: NoDiscardCardActionContext): NoDiscardCardAction => {
        const player = this.visitWord(ctx._player)
        return { type: 'action', subtype: 'no discard card', player }
    }

    visitResolveDiscardAction = (ctx: ResolveDiscardActionContext): ResolveDiscardAction => {
        const cards = Number(ctx._cards.text)
        return { type: 'action', subtype: 'resolve discard', cards }
    }

    visitResolveDiscardAndRedrawAction = (ctx: ResolveDiscardAndRedrawActionContext): ResolveDiscardAndRedrawAction => {
        const cards = Number(ctx._cards.text)
        return { type: 'action', subtype: 'resolve discard and redraw', cards }
    }

    visitActivateCardAction = (ctx: ActivateCardActionContext): ActivateCardAction => {
        const card = this.visitCard(ctx.card())
        return { type: 'action', subtype: 'activate card', card }
    }

    visitChoseAction = (ctx: ChoseActionContext): ChoseAction => {
        return (ctx.addTrade() ?? ctx.addCombat() ?? ctx.addAuthority()).accept(this)
    }

    visitGenericResolveAction = (_ctx: GenericResolveActionContext): GenericResolveAction => {
        return { type: 'action', subtype: 'generic resolve' }
    }

    visitSelectCardAction = (ctx: SelectCardActionContext): SelectCardAction => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())
        return { type: 'action', subtype: 'select card', player, card }
    }

    visitReturnCardAction = (ctx: ReturnCardActionContext): ReturnCardAction => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())
        return { type: 'action', subtype: 'return card', player, card }
    }
    // endregion

    // region Effects
    visitEffectLine = (ctx: EffectLineContext): Effect => this.visitEffect(ctx.effect())

    visitEffect = (ctx: EffectContext): Effect => (
        ctx.shuffledEffect() ??
        ctx.turnChangedEffect() ??
        ctx.cardToOwnerEffect() ??
        ctx.cardToOpponentEffect() ??
        ctx.sideEffect() ??
        ctx.drewCardsEffect() ??
        ctx.refreshedAllyIndicatorsEffect() ??
        ctx.scrappedCardEffect() ??
        ctx.noMoreCardsToDiscardEffect() ??
        ctx.discardedCardEffect() ??
        ctx.wonGameEffect() ??
        ctx.destroyedBaseEffect() ??
        ctx.revealedEventEffect() ??
        ctx.revealedEffect() ??
        ctx.acquiredToTheTopOfDeckEffect() ??
        ctx.acquiredToHandEffect() ??
        ctx.changedToOnTableImage() ??
        ctx.changedCardToCard()
    ).accept(this)

    visitShuffledEffect = (_ctx: ShuffledEffectContext): ShuffledEffect => {
        return { type: 'effect', subtype: 'shuffled' }
    }

    visitTurnChangedEffect = (ctx: TurnChangedEffectContext): TurnChangedEffect => {
        const player = this.visitWord(ctx._player)
        const turn = Number(ctx._turn.text)
        return { type: 'effect', subtype: 'turn changed', player, turn }
    }

    visitCardToOwnerEffect = (ctx: CardToOwnerEffectContext): CardToOwnerEffect => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())
        const effect = ctx._ability
            ? 'ability available'
            : (
                ctx.tradeChange() ??
                ctx.combatChange() ??
                ctx.authorityChange()
            ).accept(this)
        return { type: 'effect', subtype: 'card to owner', player, card, effect }
    }

    visitCardToOpponentEffect = (ctx: CardToOpponentEffectContext): CardToOpponentEffect => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())

        const effect: StatChange<'discard' | 'authority'> = (
            ctx.discardChange() ??
            ctx.authorityChange()
        ).accept(this)

        return { type: 'effect', subtype: 'card to opponent', player, card, effect }
    }

    visitSideEffect = (ctx: SideEffectContext): SideEffect => {
        const player = this.visitWord(ctx._player)
        const effect = (
            ctx.tradeChange() ??
            ctx.combatChange() ??
            ctx.authorityChange() ??
            ctx.discardChange()
        ).accept(this)
        return { type: 'effect', subtype: 'side', player, effect }
    }

    visitDrewCardsEffect = (ctx: DrewCardsEffectContext): DrewCardsEffect => {
        const cards = Number(ctx._cards.text)
        return { type: 'effect', subtype: 'drew cards', cards }
    }

    visitRefreshedAllyIndicatorsEffect = (
        _ctx: RefreshedAllyIndicatorsEffectContext
    ): RefreshedAllyIndicatorsEffect => {
        return { type: 'effect', subtype: 'refreshed ally indicators' }
    }

    visitScrappedCardEffect = (ctx: ScrappedCardEffectContext): ScrappedCardEffect => {
        const card = this.visitCard(ctx.card())
        return { type: 'effect', subtype: 'scrapped card', card }
    }

    visitNoMoreCardsToDiscardEffect = (_ctx: NoMoreCardsToDiscardEffectContext): NoMoreCardsToDiscardEffect => {
        return { type: 'effect', subtype: 'no more cards to discard' }
    }

    visitDiscardedCardEffect = (ctx: DiscardedCardEffectContext): DiscardedCardEffect => {
        const card = this.visitCard(ctx.card())
        return { type: 'effect', subtype: 'discarded card', card }
    }

    visitWonGameEffect = (ctx: WonGameEffectContext): WonGameEffect => {
        const player = this.visitWord(ctx._player)
        return { type: 'effect', subtype: 'won game', player }
    }

    visitDestroyedBaseEffect = (ctx: DestroyedBaseEffectContext): DestroyedBaseEffect => {
        const base = this.visitCard(ctx.card())
        return { type: 'effect', subtype: 'destroyed base', base }
    }

    visitRevealedEventEffect = (ctx: RevealedEventEffectContext): RevealedEventEffect => {
        const event = this.visitCard(ctx.card())
        return { type: 'effect', subtype: 'revealed event', event }
    }

    visitRevealedEffect = (ctx: RevealedEffectContext): RevealedEffect => {
        const card = this.visitCard(ctx.card())
        return { type: 'effect', subtype: 'revealed', card }
    }

    visitAcquiredToTheTopOfDeckEffect = (
        ctx: AcquiredToTheTopOfDeckEffectContext
    ): AcquiredToTheTopOfDeckEffect => {
        const card = this.visitCard(ctx.card())
        return { type: 'effect', subtype: 'acquired to the top of deck', card }
    }

    visitAcquiredToHandEffect = (ctx: AcquiredToHandEffectContext): AcquiredToHandEffect => {
        const card = this.visitCard(ctx.card())
        return { type: 'effect', subtype: 'acquired to hand', card }
    }

    visitChangedToOnTableImage = (ctx: ChangedToOnTableImageContext): ChangedToOnTableImageEffect => {
        const card = this.visitCard(ctx.card())
        return { type: 'effect', subtype: 'changed to on table image', card }
    }

    visitChangedCardToCard = (ctx: ChangedCardToCardContext): ChangedCardToCardEffect => {
        const card = this.visitCard(ctx._fromCard)
        const toCard = this.visitCard(ctx._toCard)
        return { type: 'effect', subtype: 'changed card to card', card, toCard }
    }
    // endregion

    // region Add
    visitAddTrade = (ctx: AddTradeContext): ChoseAction => {
        const amount = Number(ctx._amount.text)
        return { type: 'action', subtype: 'chose', amount, stat: 'trade' }
    }
    visitAddCombat = (ctx: AddCombatContext): ChoseAction => {
        const amount = Number(ctx._amount.text)
        return { type: 'action', subtype: 'chose', amount, stat: 'combat' }
    }
    visitAddAuthority = (ctx: AddAuthorityContext): ChoseAction => {
        const amount = Number(ctx._amount.text)
        return { type: 'action', subtype: 'chose', amount, stat: 'authority' }
    }
    // endregion

    // region Change
    visitTradeChange = (ctx: TradeChangeContext): StatChange<'trade'> => {
        const change = this.visitSignedNum(ctx._change)
        const final = this.visitSignedNum(ctx._final)
        return { type: 'trade', change, final }
    }

    visitCombatChange = (ctx: CombatChangeContext): StatChange<'combat'> => {
        const change = this.visitSignedNum(ctx._change)
        const final = this.visitSignedNum(ctx._final)
        return { type: 'combat', change, final }
    }

    visitAuthorityChange = (ctx: AuthorityChangeContext): StatChange<'authority'> => {
        const change = this.visitSignedNum(ctx._change)
        const final = this.visitSignedNum(ctx._final)
        return { type: 'authority', change, final }
    }

    visitDiscardChange = (ctx: DiscardChangeContext): StatChange<'discard'> => {
        const change = this.visitSignedNum(ctx._change)
        const final = this.visitSignedNum(ctx._final)
        return { type: 'discard', change, final }
    }
    // endregion

    // region Misc
    visitSignedNum = (ctx: SignedNumContext): number => {
        const sign = ctx._sign?.text
        const num = Number(ctx.NUM())
        return sign === '-' ? -num : num
    }

    visitWord = (ctx: WordContext): string => {
        return ctx.getText()
    }

    visitCard = (ctx: CardContext): string => {
        return ctx._name.map(word => this.visitWord(word)).join(' ')
    }
    // endregion
}
