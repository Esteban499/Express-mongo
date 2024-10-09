const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express'); 
const app = express();
const puerto = process.env.PORT || 3002;
const taskroutes = require("./routes/task.router");

app.use(express.json());
app.use("/tasks", taskroutes);

app.get("/", (req, res)=> 
	res.send("¡Olis!")
);

app.listen(puerto, 
	(err, res)=> {mongoose.connect(process.env.MONGOCONNECTION)
		console.log("funciona!! :D")
	}
);


