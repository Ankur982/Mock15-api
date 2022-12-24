const router = require("express").Router();
const Ticket = require("../models/Ticket")





router.get("/tickets", async (req, res) => {
  
    const { category, sort} = req.query;
    
    const queryObject = {};

    if (category) {
        queryObject.category = category;
    }
    let apiData = Ticket.find(queryObject);


    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
      }
   ;

    const Tickets = await apiData;
    res.status(200).send({ Tickets});
});


router.post("/tickets", async (req, res) => {

    const newTickets = new Ticket({
        category: req.body.category,
        title: req.body.title,
        message: req.body.message
    });

    try {
        const createdTicket = await newTickets.save();

        res.status(201).send(createdTicket)
    }
    catch (err) {

        res.status(500).send(err)
    }

})




module.exports = router;