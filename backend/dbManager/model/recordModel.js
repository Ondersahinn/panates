
const mongoose = require("mongoose");

const Record = mongoose.Schema({
  name: {
    type: Array,
    required: true
  },
  host: {
    type: Object,
    required: true
  },
  accommodates: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bed: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  amenities: {
    type: Array,
    required: true
  },
  address: {
    type: Array,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  monthly_price: {
    type: Number,
  },
  weekly_price: {
    type: Number,
  },
  security_deposit: {
    type: Number,
  },
  cleaning_fee: {
    type: Number,
  },
  createDateTime: {
    type: String
  },
  review_score: {
    type: Object
  },
  images: {
    type: Object
  },
  reviews: {
    type: Array
  },
  space: {
    type: String
  },
  neighborhood_overview: {
    type: String
  },
  notes: {
    type: String
  },
  transit: {
    type: String
  },
  access: {
    type: String
  },
  interaction: {
    type: String
  },
});

module.exports.Schema = Record;
