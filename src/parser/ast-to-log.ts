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
} from 'antlr-generated/LogParser'
import LogVisitor from 'antlr-generated/LogVisitor'
import {Log} from 'log'
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
} from 'log/actions'
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
} from 'log/effects'

export const astToLog = (ast: StartContext): Log => {
    const visitor = new Visitor()
    return ast.accept(visitor)
}


class Visitor extends LogVisitor<any> {
    visitStart = (ctx: StartContext): Log => {
        const lines = ctx._lines.map(line => this.visitLine(line))
        return {lines}
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

    visitAction = (ctx: ActionContext): Action => {
        if (ctx.playAllCardsAction()) {
            return this.visitPlayAllCardsAction(ctx.playAllCardsAction())
        } else if (ctx.playOneCardAction()) {
            return this.visitPlayOneCardAction(ctx.playOneCardAction())
        } else if (ctx.acquireCardAction()) {
            return this.visitAcquireCardAction(ctx.acquireCardAction())
        } else if (ctx.endTurnAction()) {
            return this.visitEndTurnAction(ctx.endTurnAction())
        } else if (ctx.attackPlayerAction()) {
            return this.visitAttackPlayerAction(ctx.attackPlayerAction())
        } else if (ctx.attackBaseAction()) {
            return this.visitAttackBaseAction(ctx.attackBaseAction())
        } else if (ctx.scrapSubjectCardAction()) {
            return this.visitScrapSubjectCardAction(ctx.scrapSubjectCardAction())
        } else if (ctx.scrapObjectCardAction()) {
            return this.visitScrapObjectCardAction(ctx.scrapObjectCardAction())
        } else if (ctx.noScrapObjectCardAction()) {
            return this.visitNoScrapObjectCardAction(ctx.noScrapObjectCardAction())
        } else if (ctx.discardCardAction()) {
            return this.visitDiscardCardAction(ctx.discardCardAction())
        } else if (ctx.noDiscardCardAction()) {
            return this.visitNoDiscardCardAction(ctx.noDiscardCardAction())
        } else if (ctx.resolveDiscardAction()) {
            return this.visitResolveDiscardAction(ctx.resolveDiscardAction())
        } else if (ctx.resolveDiscardAndRedrawAction()) {
            return this.visitResolveDiscardAndRedrawAction(ctx.resolveDiscardAndRedrawAction())
        } else if (ctx.activateCardAction()) {
            return this.visitActivateCardAction(ctx.activateCardAction())
        } else if (ctx.choseAction()) {
            return this.visitChoseAction(ctx.choseAction())
        } else if (ctx.genericResolveAction()) {
            return this.visitGenericResolveAction(ctx.genericResolveAction())
        } else if (ctx.selectCardAction()) {
            return this.visitSelectCardAction(ctx.selectCardAction())
        } else if (ctx.returnCardAction()) {
            return this.visitReturnCardAction(ctx.returnCardAction())
        } else {
            throw new Error('unknown action')
        }
    }

    visitPlayAllCardsAction = (_ctx: PlayAllCardsActionContext): PlayAllCardsAction => {
        return {type: 'action', subtype: 'play all cards'}
    }

    visitPlayOneCardAction = (ctx: PlayOneCardActionContext): PlayOneCardAction => {
        const card = this.visitCard(ctx.card())
        return {type: 'action', subtype: 'play card', card}
    }

    visitAcquireCardAction = (ctx: AcquireCardActionContext): AcquireCardAction => {
        const card = this.visitCard(ctx.card())
        return {type: 'action', subtype: 'acquire card', card}
    }

    visitEndTurnAction = (ctx: EndTurnActionContext): EndTurnAction => {
        const player = this.visitWord(ctx._player)
        const turn = Number(ctx._turn.text)
        return {type: 'action', subtype: 'end turn', player, turn}
    }

    visitAttackPlayerAction = (ctx: AttackPlayerActionContext): AttackPlayerAction => {
        const targetPlayer = this.visitWord(ctx._targetPlayer)
        const damage = Number(ctx._damage.text)
        const newAuthority = this.visitSignedNum(ctx.signedNum())
        return {type: 'action', subtype: 'attack player', targetPlayer, damage, newAuthority}
    }

    visitAttackBaseAction = (ctx: AttackBaseActionContext): AttackBaseAction => {
        const base = this.visitCard(ctx.card())
        return {type: 'action', subtype: 'attack base', base}
    }

    visitScrapSubjectCardAction = (ctx: ScrapSubjectCardActionContext): ScrapSubjectCardAction => {
        const card = this.visitCard(ctx.card())
        return {type: 'action', subtype: 'scrap subject card', card}
    }

    visitScrapObjectCardAction = (ctx: ScrapObjectCardActionContext): ScrapObjectCardAction => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())
        return {type: 'action', subtype: 'scrap object card', player, card}
    }

    visitNoScrapObjectCardAction = (ctx: NoScrapObjectCardActionContext): NoScrapObjectCardAction => {
        const player = this.visitWord(ctx._player)
        return {type: 'action', subtype: 'no scrap object card', player}
    }

    visitDiscardCardAction = (ctx: DiscardCardActionContext): DiscardCardAction => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())
        return {type: 'action', subtype: 'discard card', player, card}
    }

    visitNoDiscardCardAction = (ctx: NoDiscardCardActionContext): NoDiscardCardAction => {
        const player = this.visitWord(ctx._player)
        return {type: 'action', subtype: 'no discard card', player}
    }

    visitResolveDiscardAction = (ctx: ResolveDiscardActionContext): ResolveDiscardAction => {
        const cards = Number(ctx._cards.text)
        return {type: 'action', subtype: 'resolve discard', cards}
    }

    visitResolveDiscardAndRedrawAction = (ctx: ResolveDiscardAndRedrawActionContext): ResolveDiscardAndRedrawAction => {
        const cards = Number(ctx._cards.text)
        return {type: 'action', subtype: 'resolve discard and redraw', cards}
    }

    visitActivateCardAction = (ctx: ActivateCardActionContext): ActivateCardAction => {
        const card = this.visitCard(ctx.card())
        return {type: 'action', subtype: 'activate card', card}
    }

    visitChoseAction = (ctx: ChoseActionContext): ChoseAction => {
        if (ctx.addTrade()) {
            return this.visitAddTrade(ctx.addTrade())
        } else if (ctx.addCombat()) {
            return this.visitAddCombat(ctx.addCombat())
        } else if (ctx.addAuthority()) {
            return this.visitAddAuthority(ctx.addAuthority())
        } else {
            throw new Error('Unknown choice')
        }
    }

    visitGenericResolveAction = (_ctx: GenericResolveActionContext): GenericResolveAction => {
        return {type: 'action', subtype: 'generic resolve'}
    }

    visitSelectCardAction = (ctx: SelectCardActionContext): SelectCardAction => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())
        return {type: 'action', subtype: 'select card', player, card}
    }

    visitReturnCardAction = (ctx: ReturnCardActionContext): ReturnCardAction => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())
        return {type: 'action', subtype: 'return card', player, card}
    }
    // endregion

    // region Effects
    visitEffectLine = (ctx: EffectLineContext): Effect => {
        return this.visitEffect(ctx.effect())
    }

    visitEffect = (ctx: EffectContext): Effect => {
        if (ctx.shuffledEffect()) {
            return this.visitShuffledEffect(ctx.shuffledEffect())
        } else if (ctx.turnChangedEffect()) {
            return this.visitTurnChangedEffect(ctx.turnChangedEffect())
        } else if (ctx.cardToOwnerEffect()) {
            return this.visitCardToOwnerEffect(ctx.cardToOwnerEffect())
        } else if (ctx.cardToOpponentEffect()) {
            return this.visitCardToOpponentEffect(ctx.cardToOpponentEffect())
        } else if (ctx.sideEffect()) {
            return this.visitSideEffect(ctx.sideEffect())
        } else if (ctx.drewCardsEffect()) {
            return this.visitDrewCardsEffect(ctx.drewCardsEffect())
        } else if (ctx.refreshedAllyIndicatorsEffect()) {
            return this.visitRefreshedAllyIndicatorsEffect(ctx.refreshedAllyIndicatorsEffect())
        } else if (ctx.scrappedCardEffect()) {
            return this.visitScrappedCardEffect(ctx.scrappedCardEffect())
        } else if (ctx.noMoreCardsToDiscardEffect()) {
            return this.visitNoMoreCardsToDiscardEffect(ctx.noMoreCardsToDiscardEffect())
        } else if (ctx.discardedCardEffect()) {
            return this.visitDiscardedCardEffect(ctx.discardedCardEffect())
        } else if (ctx.wonGameEffect()) {
            return this.visitWonGameEffect(ctx.wonGameEffect())
        } else if (ctx.destroyedBaseEffect()) {
            return this.visitDestroyedBaseEffect(ctx.destroyedBaseEffect())
        } else if (ctx.revealedEventEffect()) {
            return this.visitRevealedEventEffect(ctx.revealedEventEffect())
        } else if (ctx.revealedEffect()) {
            return this.visitRevealedEffect(ctx.revealedEffect())
        } else if (ctx.acquiredToTheTopOfDeckEffect()) {
            return this.visitAcquiredToTheTopOfDeckEffect(ctx.acquiredToTheTopOfDeckEffect())
        } else if (ctx.acquiredToHandEffect()) {
            return this.visitAcquiredToHandEffect(ctx.acquiredToHandEffect())
        } else if (ctx.changedToOnTableImage()) {
            return this.visitChangedToOnTableImageEffect(ctx.changedToOnTableImage())
        } else if (ctx.changedCardToCard()) {
            return this.visitChangedCardToCardEffect(ctx.changedCardToCard())
        } else {
            throw new Error('unknown effect')
        }
    }

    visitShuffledEffect = (_ctx: ShuffledEffectContext): ShuffledEffect => {
        return {type: 'effect', subtype: 'shuffled'}
    }

    visitTurnChangedEffect = (ctx: TurnChangedEffectContext): TurnChangedEffect => {
        const player = this.visitWord(ctx._player)
        const turn = Number(ctx._turn.text)
        return {type: 'effect', subtype: 'turn changed', player, turn}
    }

    visitCardToOwnerEffect = (ctx: CardToOwnerEffectContext): CardToOwnerEffect => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())
        const effect = (() => {
            if (ctx._ability) {
                return 'ability available'
            } else if (ctx.tradeChange()) {
                return this.visitTradeChange(ctx.tradeChange())
            } else if (ctx.combatChange()) {
                return this.visitCombatChange(ctx.combatChange())
            } else if (ctx.authorityChange()) {
                return this.visitAuthorityChange(ctx.authorityChange())
            } else {
                throw new Error('unknown change effect')
            }
        })()

        return {type: 'effect', subtype: 'card to owner', player, card, effect}
    }

    visitCardToOpponentEffect = (ctx: CardToOpponentEffectContext): CardToOpponentEffect => {
        const player = this.visitWord(ctx._player)
        const card = this.visitCard(ctx.card())

        const effect: StatChange<'discard' | 'authority'> = (() => {
            if (ctx.discardChange()) {
                return this.visitDiscardChange(ctx.discardChange())
            } else if (ctx.authorityChange()) {
                return this.visitAuthorityChange(ctx.authorityChange())
            } else {
                throw new Error('unknown change effect')
            }
        })()

        return {type: 'effect', subtype: 'card to opponent', player, card, effect}
    }

    visitSideEffect = (ctx: SideEffectContext): SideEffect => {
        const player = this.visitWord(ctx._player)
        const effect = (() => {
            if (ctx.tradeChange()) {
                return this.visitTradeChange(ctx.tradeChange())
            } else if (ctx.combatChange()) {
                return this.visitCombatChange(ctx.combatChange())
            } else if (ctx.authorityChange()) {
                return this.visitAuthorityChange(ctx.authorityChange())
            } else if (ctx.discardChange()) {
                return this.visitDiscardChange(ctx.discardChange())
            } else {
                throw new Error('unknown change effect')
            }
        })()
        return {type: 'effect', subtype: 'side', player, effect}
    }

    visitDrewCardsEffect = (ctx: DrewCardsEffectContext): DrewCardsEffect => {
        const cards = Number(ctx._cards.text)
        return {type: 'effect', subtype: 'drew cards', cards}
    }

    visitRefreshedAllyIndicatorsEffect = (
        _ctx: RefreshedAllyIndicatorsEffectContext
    ): RefreshedAllyIndicatorsEffect => {
        return {type: 'effect', subtype: 'refreshed ally indicators'}
    }

    visitScrappedCardEffect = (ctx: ScrappedCardEffectContext): ScrappedCardEffect => {
        const card = this.visitCard(ctx.card())
        return {type: 'effect', subtype: 'scrapped card', card}
    }

    visitNoMoreCardsToDiscardEffect = (_ctx: NoMoreCardsToDiscardEffectContext): NoMoreCardsToDiscardEffect => {
        return {type: 'effect', subtype: 'no more cards to discard'}
    }

    visitDiscardedCardEffect = (ctx: DiscardedCardEffectContext): DiscardedCardEffect => {
        const card = this.visitCard(ctx.card())
        return {type: 'effect', subtype: 'discarded card', card}
    }

    visitWonGameEffect = (ctx: WonGameEffectContext): WonGameEffect => {
        const player = this.visitWord(ctx._player)
        return {type: 'effect', subtype: 'won game', player}
    }

    visitDestroyedBaseEffect = (ctx: DestroyedBaseEffectContext): DestroyedBaseEffect => {
        const base = this.visitCard(ctx.card())
        return {type: 'effect', subtype: 'destroyed base', base}
    }

    visitRevealedEventEffect = (ctx: RevealedEventEffectContext): RevealedEventEffect => {
        const event = this.visitCard(ctx.card())
        return {type: 'effect', subtype: 'revealed event', event}
    }

    visitRevealedEffect = (ctx: RevealedEffectContext): RevealedEffect => {
        const card = this.visitCard(ctx.card())
        return {type: 'effect', subtype: 'revealed', card}
    }

    visitAcquiredToTheTopOfDeckEffect = (
        ctx: AcquiredToTheTopOfDeckEffectContext
    ): AcquiredToTheTopOfDeckEffect => {
        const card = this.visitCard(ctx.card())
        return {type: 'effect', subtype: 'acquired to the top of deck', card}
    }

    visitAcquiredToHandEffect = (ctx: AcquiredToHandEffectContext): AcquiredToHandEffect => {
        const card = this.visitCard(ctx.card())
        return {type: 'effect', subtype: 'acquired to hand', card}
    }

    visitChangedToOnTableImageEffect = (ctx: ChangedToOnTableImageContext): ChangedToOnTableImageEffect => {
        const card = this.visitCard(ctx.card())
        return {type: 'effect', subtype: 'changed to on table image', card}
    }

    visitChangedCardToCardEffect = (ctx: ChangedCardToCardContext): ChangedCardToCardEffect => {
        const card = this.visitCard(ctx._fromCard)
        const toCard = this.visitCard(ctx._toCard)
        return {type: 'effect', subtype: 'changed card to card', card, toCard}
    }
    // endregion

    // region Add
    visitAddTrade = (ctx: AddTradeContext): ChoseAction => {
        const amount = Number(ctx._amount.text)
        return {type: 'action', subtype: 'chose', amount, stat: 'trade'}
    }
    visitAddCombat = (ctx: AddCombatContext): ChoseAction => {
        const amount = Number(ctx._amount.text)
        return {type: 'action', subtype: 'chose', amount, stat: 'combat'}
    }
    visitAddAuthority = (ctx: AddAuthorityContext): ChoseAction => {
        const amount = Number(ctx._amount.text)
        return {type: 'action', subtype: 'chose', amount, stat: 'authority'}
    }
    // endregion

    // region Change
    visitTradeChange = (ctx: TradeChangeContext): StatChange<'trade'> => {
        const change = this.visitSignedNum(ctx._change)
        const final = this.visitSignedNum(ctx._final)
        return {type: 'trade', change, final}
    }

    visitCombatChange = (ctx: CombatChangeContext): StatChange<'combat'> => {
        const change = this.visitSignedNum(ctx._change)
        const final = this.visitSignedNum(ctx._final)
        return {type: 'combat', change, final}
    }

    visitAuthorityChange = (ctx: AuthorityChangeContext): StatChange<'authority'> => {
        const change = this.visitSignedNum(ctx._change)
        const final = this.visitSignedNum(ctx._final)
        return {type: 'authority', change, final}
    }

    visitDiscardChange = (ctx: DiscardChangeContext): StatChange<'discard'> => {
        const change = this.visitSignedNum(ctx._change)
        const final = this.visitSignedNum(ctx._final)
        return {type: 'discard', change, final}
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
