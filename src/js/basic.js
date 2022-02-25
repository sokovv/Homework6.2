const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон',
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
        },
    ],
};


export default function attack({ special }) {
    const result = [];

    for (const { id, name, icon, description = 'Описание недоступно' } of special) {
        const obj = {
            id,
            name,
            icon,
            description,
        };

        result.push(obj);
    }

    return result;
}



console.log(attack(character));

