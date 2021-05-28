const team = {
    _abbreviation: 'GSW',
    _players: [
        {
            firstName: 'Kent',
            lastName: 'Bazemore',
            position: 'SF'
        },
        {
            firstName: 'Stephen',
            lastName: 'Curry',
            position: 'PG'
        },
        {
            firstName: 'Jordan',
            lastName: 'Bell',
            position: 'F'
        },
        {
            firstName: 'Draymond',
            lastName: 'Green',
            position: 'PF'
        },
        {
            firstName: 'Damien',
            lastName: 'Lee',
            position: 'SG'
        }
    ],
    _games: [
        {
            opposing: 'MEM',
            ownScore: 113,
            opposingScore: 101
        },
        {
            opposing: 'NOP',
            ownScore: 125,
            opposingScore: 122
        },
        {
            opposing: 'PHX',
            ownScore: 122,
            opposingScore: 116
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, pos) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            position: pos
        }
        this.players.push(player);
    },
    addGame(opposing, ownScore, opposingScore) {
        let game = {
            opposing: opposing,
            ownScore: ownScore,
            opposingScore: opposingScore
        }
        this.games.push(game);
    }
}

team.addPlayer('Klay', 'Thompson', 'SG');
team.addGame('UTA', 119, 116);

console.log(team.players);
console.log(team.games);