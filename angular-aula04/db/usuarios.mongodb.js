
use('app-artigos');

db.usuarios.drop();

db.usuarios.insertMany([
    {
        '_id': 1,
        'login': 'admin',
        'senha': 'admin',
        'nome': 'Administrador do Sistema',
        'administrador': true
    },
    {
        '_id': 2,
        'login': 'kauan',
        'senha': '123',
        'nome': 'Kauan Polydoro',
        'administrador': false
    }
]);
