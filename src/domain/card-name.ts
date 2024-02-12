import { RawCardName } from 'domain/raw-card-name'

export type CardName = Exclude<
    RawCardName,
    | 'Ad (Thank You Backers) | Rules (Kickstarter Promo Pack)'
    | 'Alignment Ingenuity | Rules (Part 2 of 3)'
    | 'Alliance Procurement | Rules (Part 2 of 3)'
    | 'Automatons | Rules (Automatons)'
    | 'Biolord Walsh | Rules (Part 3 of 3)'
    | 'Blob Assault | Rules (Blob Assault)'
    | 'Coalition Efficiency | Rules (Part 1 of 2)'
    | 'Divine Admiral Le | Rules (Part 3 of 3)'
    | 'Fleet Director Nandi | Rules (Part 3 of 3)'
    | 'High Director Valken | Rules (Part 2 of 2)'
    | 'Hive Admiral McCready | Rules (Part 3 of 3)'
    | 'Jochum\'s Grand Design | Rules (Part 2 of 2)'
    | 'Le\'s Foray | Rules (Part 1 of 3)'
    | 'McCready\'s Maneuver | Rules (Part 1 of 3)'
    | 'Madness of the Machine | Rules (Madness of the Machine)'
    | 'Nandi’s Onslaught | Rules (Part 1 of 3)'
    | 'Newburg’s Game | Rules (Part 1 of 3)'
    | 'Overlord Newburg | Rules (Part 3 of 3)'
    | 'Pact Dominion | Rules (Part 2 of 3)'
    | 'Pirates of the Dark Star | Rules (Pirates of the Dark Star)'
    | 'Rules (Faction Pairs) | Ad (Hero Realms)'
    | 'Rules (Faction Pairs) | Ad (Star Realms United)'
    | 'Rules (Gambits Part 1) | Rules (Gambits Part 2)'
    | 'Rules (Heroes) | Rules (Hero Faction Abilities)'
    | 'Rules (Missions) | Ad (Hero Realms)'
    | 'Rules (Scenarios) | Ad (Hero Realms)'
    | 'Scorecard (00-09) | Scorecard (80-89)'
    | 'Scorecard (1) | Scorecard (5)'
    | 'Scorecard (10) | Scorecard (20)'
    | 'Scorecard (40-70) | Scorecard (00-30)'
    | 'Splinter Tech | Rules (Part 1 of 2)'
    | 'The Cost of Freedom | Rules (The Cost of Freedom)'
    | 'Union Blitz | Rules (Part 2 of 3)'
    | 'Walsh\'s Stratagem | Rules (Part 1 of 3)'
    | 'Administrator Tung'
    | 'Alpha Max'
    | 'Battle Star'
>
