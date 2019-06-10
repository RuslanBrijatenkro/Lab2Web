import { timeout } from 'q';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
  
const UserSchema = new Schema({
    name       : { type : String },
    email      : { type : String },
    password   : { type : String },
    flag       : { type : String }
 });
const ConcertSchema = new Schema({
    name       : { type : String },
    description: { type : String },
    price      : { type : Number }
 });
const BookingSchema = new Schema({
    id         : { type : String },
    timer      : { type : Date }
})
export const User = mongoose.model('User',UserSchema);
export const Concert = mongoose.model('Concert',ConcertSchema);
export const Booking = mongoose.model('booking',BookingSchema)