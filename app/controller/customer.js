const db =require('../config/db.config');
const Customer =db.customers;

exports.create = (req, res)=>{
  Customer.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    zipcode: req.body.zipcode,
    email: req.body.email
  }).then(customer=>{
    res.send(customer);
  });
};

exports.findAll = (req, res) => {
  Customer.findAll()
  .then(customers=>{
    res.send(customers);
  })
};

exports.findByPk = (req, res) => {
  Customer.findByPk(req.params.customerId)
  .then(customer =>{
    res.send(customer);
  })
};

exports.update = (req,res)=>{
  const id= req.params.customerId;

  Customer.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      zipcode: req.body.zipcode,
      email: req.body.email
  },
  {
    where: {
      id: id
    }
  }
  ).then(()=>{
    res.status(200).send("successfully updated customer with id = " + id);
  });
};

exports.delete = (req, res)=>{
  const id= req.params.customerId;
  Customer.destroy({
    where: {id:id}
  }).then(()=>{
    res.status(200).send("successfully deleted customer with id = " + id)
  })
}
