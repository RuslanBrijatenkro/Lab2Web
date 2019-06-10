import {User,Concert,Booking} from './Schems';
import mongoose from 'mongoose';

export const SetUpConnection = () =>
{
    mongoose.connect('mongodb://localhost:27017/Web',{ useNewUrlParser: true },() =>{
        console.log('ok')
    });
}
export function GetUsers(req,res)
{
    User.find().then((err,posts)=>{
        if(err)
            res.send(err)
        res.json(posts)
    })
}
export function GetConcerts(req,res)
{
    Concert.find().then((err,posts)=>{
        if(err)
            res.send(err)
        res.json(posts)
    })
}
export function AddUser (req,res)
{
  const data = req.body;
  console.log(data.flag)
  const post = new User({
    name:data.name,
    email:data.email,
    password:data.password,
    flag:data.flag
  })
  post.save().then(()=> {
    res.send('OK')
  })
}
export function AddToBooking (req,res)
{
  const data = req.body;
  console.log(data.id)
  const post = new Booking({
      id:data.id,
      timer: new Date()
  })
  post.save().then(()=> {
      setTimeout(()=>{
          Booking.remove({
              id:data.id
          }).then(()=> console.log('deleted'))
      },30000)
  })
}
export function GetBooking(req,res)
{
    Booking.find().then((err,posts)=>{
        if(err)
            res.send(err)
        res.json(posts)
    })
}
export function DeleteConcert(req,res)
{
    console.log(req.params.id);
    Concert.remove({
        _id:req.params.id
    }).then(()=> console.log('deleted'))
}