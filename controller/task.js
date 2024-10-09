const Task = require('../model/task');

module.exports.getTask = (req, res) =>{
    
}


module.exports.createtask = (req ,res) =>{
    const newTask = new Task({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        start: new Date(req.body.start), 
        end: new Date(req.body.end),
        status: req.body.status,
        geoLong: req.body['geo-long'], 
        geoLat: req.body['geo-lat'],
    })

    newTask.
    save().
    then((newTask)=>
        res.status(201).json({
            message: "Tarea creada exitosamente",
            task: newTask
        })
    )
    .catch((error)=>
        res.status(500).json({
            message: "Error",
            err: "oh no!" + error
        })
    )
}






