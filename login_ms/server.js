const app = require("./src/app");
const consul = require("consul")()
const Cid = require('uuid').v4()

const CONSUL_ID = 'Login_MS'
const hostname = '127.0.0.1'
const port = process.env.NODE_PORT || 3000

app.listen(port, () => {
  console.log("running on port 3000");
  console.log("--------------------------");
});


const myService = {
  name : CONSUL_ID,
  address: hostname,
  port : port,
  id : Cid,
  check:{
    ttl: '10s',
    deregister_critical_service_after:'1m',
  },
}

consul.agent.service.register(myService,(err)=>{
  if(err){
    console.log(err);
  }
  setInterval(()=>{
    consul.agent.check.pass({id:`service:${Cid}`},(err)=>{
      if(err){
        console.log(err);
        throw new Error("Consul err")
      }  
    })
  },5*1000)
})