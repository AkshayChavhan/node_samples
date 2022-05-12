const EventEmitter = require("events");

const event = new EventEmitter() ;              //all methods of events are stored in event by creating objects


event.on("sayMyName" , ()=>{                    //eventname , event is defined(registering event listener)
    console.log("akshay chavhan");
})

event.emit("sayMyName");                    //event name is saymyname and call it means emit it
//emitting name of event

// -----------------------------

// new event 

event.on("pageInfo" ,(statusCode , status) => {
    console.log(`the status code of page is ${statusCode} 
    and the page is ${status}`);
})

event.emit("pageInfo" , 200 , "ok");








