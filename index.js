const ds = require("discord.js-self")
exports.login = function(bots,tokens){
    for(let i = 0;i < bots.length;i++){
        bots[i].login(tokens[i])
    }
}
exports.reload = function(bots,tokens){
    for(let i = 0;i < bots.length;i++){
        bots[i].destroy()
    }
    for(let i = 0;i < bots.length;i++){
        bots[i].login(tokens[i])
    }
}
exports.kill = function(){
    process.abort()
}
exports.destroy = function(bots){
    for(let i = 0;i < bots.length;i++){
        bots[i].destroy()
    }
    bots = []
    this.bots = bots.length;
}
exports.add = function(bots,tokens){
    for(let i = 0;i < tokens.length;i++){
        bots.push(new ds.Client())
    }
    this.bots = bots.length
    if(bots.length > 10){
        process.setMaxListeners(parseInt(bots.length) + 10)
    }
}
exports.on = function(func){
    func
}