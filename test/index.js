const ifThen = require("../")
const expect = require('chai').expect

expect(ifThen('Lasse')).to.be.a('string')
