import {
    AcquireCardActionContext,
    ActionContext,
    ActionHeaderContext,
    ActivateCardActionContext,
    AddAuthorityContext,
    AddCombatContext,
    AddTradeContext,
    AttackBaseActionContext,
    AttackPlayerActionContext,
    AuthorityChangeContext,
    CardToOpponentEffectContext,
    CardToOwnerEffectContext,
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
    NoMoreCardsToDiscardEffectContext,
    NoScrapObjectCardActionContext,
    PlayAllCardsActionContext,
    PlayOneCardActionContext,
    RefreshedAllyIndicatorsEffectContext,
    ResolveDiscardActionContext,
    ScrapObjectCardActionContext,
    ScrappedCardEffectContext,
    ScrapSubjectCardActionContext,
    ShuffledEffectContext,
    SideEffectContext,
    SignedNumContext,
    StartContext,
    TradeChangeContext,
    TurnChangedEffectContext,
    WonGameEffectContext
} from 'antlr-generated/LogParser'
import LogVisitor from 'antlr-generated/LogVisitor'
import { Token } from 'antlr4'
import { Log } from 'log'
import {
    AcquireCardAction,
    Action,
    ActionHeader,
    ActivateCardAction,
    AttackBaseAction,
    AttackPlayerAction,
    ChoseAction,
    DiscardCardAction,
    EndTurnAction,
    NoScrapObjectCardAction,
    PlayAllCardsAction,
    PlayOneCardAction,
    ResolveDiscardAction,
    ScrapObjectCardAction,
    ScrapSubjectCardAction
} from 'log/actions'
import {
    CardToOpponentEffect,
    CardToOwnerEffect,
    DestroyedBaseEffect,
    DiscardedCardEffect,
    DrewCardsEffect,
    Effect,
    NoMoreCardsToDiscardEffect,
    RefreshedAllyIndicatorsEffect,
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
        const actions = ctx._actions.map(action => this.visitAction(action))
        return { actions }
    }

    // region Actions
    visitAction = (ctx: ActionContext): Action => {
        const header = this.visitActionHeader(ctx.actionHeader())
        const effects = ctx._effectLines.map(line => this.visitEffectLine(line))
        return { header, effects }
    }

    visitActionHeader = (ctx: ActionHeaderContext): ActionHeader => {
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
        } else if (ctx.resolveDiscardAction()) {
            return this.visitResolveDiscardAction(ctx.resolveDiscardAction())
        } else if (ctx.activateCardAction()) {
            return this.visitActivateCardAction(ctx.activateCardAction())
        } else if (ctx.choseAction()) {
            return this.visitChoseAction(ctx.choseAction())
        } else {
            throw new Error('Unknown action')
        }
    }

    visitPlayAllCardsAction = (_ctx: PlayAllCardsActionContext): PlayAllCardsAction => {
        return { type: 'play all cards' }
    }

    visitPlayOneCardAction = (ctx: PlayOneCardActionContext): PlayOneCardAction => {
        const card = this.parseCardName(ctx._card)
        return { type: 'play card', card }
    }

    visitAcquireCardAction = (ctx: AcquireCardActionContext): AcquireCardAction => {
        const card = this.parseCardName(ctx._card)
        return { type: 'acquire card', card }
    }

    visitEndTurnAction = (ctx: EndTurnActionContext): EndTurnAction => {
        const player = ctx._player.text
        const turn = Number(ctx._turn.text)
        return { type: 'end turn', player, turn }
    }

    visitAttackPlayerAction = (ctx: AttackPlayerActionContext): AttackPlayerAction => {
        const targetPlayer = ctx._targetPlayer.text
        const damage = Number(ctx._damage.text)
        const newAuthority = this.visitSignedNum(ctx.signedNum())
        return { type: 'attack player', targetPlayer, damage, newAuthority }
    }

    visitAttackBaseAction = (ctx: AttackBaseActionContext): AttackBaseAction => {
        const base = this.parseCardName(ctx._base)
        return { type: 'attack base', base }
    }

    visitScrapSubjectCardAction = (ctx: ScrapSubjectCardActionContext): ScrapSubjectCardAction => {
        const card = this.parseCardName(ctx._card)
        return { type: 'scrap subject card', card }
    }

    visitScrapObjectCardAction = (ctx: ScrapObjectCardActionContext): ScrapObjectCardAction => {
        const player = ctx._player.text
        const card = this.parseCardName(ctx._card)
        return { type: 'scrap object card', player, card }
    }

    visitNoScrapObjectCardAction = (ctx: NoScrapObjectCardActionContext): NoScrapObjectCardAction => {
        const player = ctx._player.text
        return { type: 'no scrap object card', player }
    }

    visitDiscardCardAction = (ctx: DiscardCardActionContext): DiscardCardAction => {
        const player = ctx._player.text
        const card = this.parseCardName(ctx._card)
        return { type: 'discard card', player, card }
    }

    visitResolveDiscardAction = (crx: ResolveDiscardActionContext): ResolveDiscardAction => {
        const cards = Number(crx._cards.text)
        return { type: 'resolve discard', cards }
    }

    visitActivateCardAction = (ctx: ActivateCardActionContext): ActivateCardAction => {
        const card = this.parseCardName(ctx._card)
        return { type: 'activate card', card }
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
        } else {
            throw new Error('unknown effect')
        }
    }

    visitShuffledEffect = (_ctx: ShuffledEffectContext): ShuffledEffect => {
        return { type: 'shuffled' }
    }

    visitTurnChangedEffect = (ctx: TurnChangedEffectContext): TurnChangedEffect => {
        const player = ctx._player.text
        const turn = Number(ctx._turn.text)
        return { type: 'turn changed', player, turn }
    }

    visitCardToOwnerEffect = (ctx: CardToOwnerEffectContext): CardToOwnerEffect => {
        const player = ctx._player.text
        const card = ctx._card.map(c => c.text).join(' ')
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

        return { type: 'card to owner', player, card, effect }
    }

    visitCardToOpponentEffect = (ctx: CardToOpponentEffectContext): CardToOpponentEffect => {
        const player = ctx._player.text
        const card = this.parseCardName(ctx._card)
        const effect = this.visitDiscardChange(ctx.discardChange())
        return { type: 'card to opponent', player, card, effect }
    }

    visitSideEffect = (ctx: SideEffectContext): SideEffect => {
        const player = ctx._player.text
        const effect = (() => {
            if (ctx.tradeChange()) {
                return this.visitTradeChange(ctx.tradeChange())
            } else if (ctx.combatChange()) {
                return this.visitCombatChange(ctx.combatChange())
            } else if (ctx.authorityChange()) {
                return this.visitAuthorityChange(ctx.authorityChange())
            } else {
                throw new Error('unknown change effect')
            }
        })()
        return { type: 'side', player, effect }
    }

    visitDrewCardsEffect = (ctx: DrewCardsEffectContext): DrewCardsEffect => {
        const cards = Number(ctx._cards.text)
        return { type: 'drew cards', cards }
    }

    visitRefreshedAllyIndicatorsEffect = (
        _ctx: RefreshedAllyIndicatorsEffectContext
    ): RefreshedAllyIndicatorsEffect => {
        return { type: 'refreshed ally indicators' }
    }

    visitScrappedCardEffect = (ctx: ScrappedCardEffectContext): ScrappedCardEffect => {
        const card = this.parseCardName(ctx._card)
        return { type: 'scrapped card', card }
    }

    visitNoMoreCardsToDiscardEffect = (_ctx: NoMoreCardsToDiscardEffectContext): NoMoreCardsToDiscardEffect => {
        return { type: 'no more cards to discard' }
    }

    visitDiscardedCardEffect = (ctx: DiscardedCardEffectContext): DiscardedCardEffect => {
        const card = this.parseCardName(ctx._card)
        return { type: 'discarded card', card }
    }

    visitWonGameEffect = (ctx: WonGameEffectContext): WonGameEffect => {
        const player = ctx._player.text
        return { type: 'won game', player }
    }

    visitDestroyedBaseEffect = (ctx: DestroyedBaseEffectContext): DestroyedBaseEffect => {
        const base = this.parseCardName(ctx._base)
        return { type: 'destroyed base', base }
    }
    // endregion

    // region Misc
    visitAddTrade = (ctx: AddTradeContext): ChoseAction => {
        const amount = Number(ctx._amount.text)
        return { type: 'chose', amount, stat: 'trade' }
    }
    visitAddCombat = (ctx: AddCombatContext): ChoseAction => {
        const amount = Number(ctx._amount.text)
        return { type: 'chose', amount, stat: 'combat' }
    }
    visitAddAuthority = (ctx: AddAuthorityContext): ChoseAction => {
        const amount = Number(ctx._amount.text)
        return { type: 'chose', amount, stat: 'authority' }
    }

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

    visitSignedNum = (ctx: SignedNumContext): number => {
        const sign = ctx._sign?.text
        const num = Number(ctx.NUM())
        return sign === '-' ? -num : num
    }

    private parseCardName(tokens: Token[]): string {
        return tokens.map(c => c.text).join(' ')
    }
}
