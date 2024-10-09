const express = require("express");
const router = express.Router();
const taskController = require("../controller/task")

router.get('/', (req, res) => {
    console.log("sirvio ")
    res.status(200).json(tasks)
});

router.get('/:id', (req, res) => {
    let tarea = tasks.find((task) => {
        return task.id == req.params.id
    });
    
    if(tarea){
        res.status(200).json(tarea);
    }
    else{
        res.status(404).json({message: 'task no found'});
    }
});


router.post('/', taskController.createtask);

router.put('/:id', (req, res) => {
    //editar la tarea identificada con el id
});

router.delete('/:id', (req, res) => {
    //elimina la tarea identificada con el id
})


module.exports = router;
