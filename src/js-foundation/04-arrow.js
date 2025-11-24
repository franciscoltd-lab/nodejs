const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const getUserById = (id, callback) => {
    
    const user = users.find(user => user.id === id);

    if(!user) return callback('USUARIO NO ENCONTRADO con el ID ' + id);    

    return callback(null, user);
}

module.exports = {
    getUserById
}