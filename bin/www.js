//@ts-check
const app = require("../app");
const http = require("http");
const port = "3030";

//set the port
app.set("port", port)
//create the server
const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {

    //@ts-expect-error
    console.log(`Server listening on port ${server.address().port}`);
});