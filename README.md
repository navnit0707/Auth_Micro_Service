# Authentication Micro Service

### command

- npx sequelize init
- npx sequelize db:create
- npx sequelize model:generate --name User --attributes email:string,password:string
- npx sequelize model:generate --name Role --attributes name:string
- npx sequelize seed:generate --name add-roles
