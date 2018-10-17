const Koa = require('koa')
const app = new Koa()

app.use(async (ctx,next) => {
	ctx.body = '电影 首页'
})

app.listen(7798)
console.log("Dome!")