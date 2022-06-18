"use strict";
exports.__esModule = true;
exports.userProviders = void 0;
var user_entity_1 = require("./entities/user.entity");
exports.userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: function (connection) { return connection.getRepository(user_entity_1.User); },
        inject: ['DATABASE_CONNECTION']
    },
];
