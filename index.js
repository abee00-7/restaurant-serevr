const jsonServer= require('json-server')
const RestaurantsServer=jsonServer.create()
const middleware=jsonServer.defaults()
const route=jsonServer.router('restaurants.json')
const PORT=3001 || process.env.PORT
RestaurantsServer.use(middleware)
RestaurantsServer.use(route)
RestaurantsServer.listen(PORT,()=>{
    console.log(`restaurant app server at ${PORT} and waiting for client request`);
})