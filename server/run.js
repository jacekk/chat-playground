const ws = require('ws');

const wss = new ws.Server({port: 8989});
let users = [];

const broadcast = (data, ws) => {
    wss
        .clients
        .forEach(client => {
            if (client.readyState === ws.OPEN && client !== ws) {
                client.send(JSON.stringify(data))
            }
        })
}

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        const parsed = JSON.parse(message)

        switch (parsed.type) {
            case 'ADD_USER':
                const newUser = {
                    name: parsed.name,
                    id: parsed.id
                };
                const action = {
                    type: 'USERS_LIST',
                    users
                };

                users.push(newUser);
                ws.customId = parsed.id;
                ws.send(JSON.stringify(action));

                broadcast({
                    type: 'USERS_LIST',
                    users
                }, ws);
                break;
            case 'ADD_MESSAGE':
                broadcast({
                    type: 'ADD_MESSAGE',
                    id: parsed.id,
                    message: parsed.message,
                    authorId: parsed.authorId,
                }, ws);
                break
            default:
                break
        }
    })

    ws.on('close', () => {
        users = users.filter(item => item.id !== ws.customId);
        broadcast({
            type: 'USERS_LIST',
            users,
        }, ws)
    })

    ws.on('error', (ev) => {
        console.log('errored', ev);
    });
})
