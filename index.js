const jsonServer = require('json-server')
const PServer = jsonServer.create()

const middleware = jsonServer.defaults()
const PORT = 3000

const route = jsonServer.router('db.json')
PServer.use(middleware)
PServer.use(route)

PServer.listen(PORT,()=>{
    console.log(`MP Server started running at port ${PORT}`); 
})