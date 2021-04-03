var expect = require('chai').expect;
var chai = require('chai'), chaiHttp = require('chai-http');
var expect = chai.expect;
const app = require("../app");
chai.use(chaiHttp);
const should = chai.should();
const chaiHttp = require("chai-http");
const assert = chai.assert;

require('../db.js');
const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const User = mongoose.model('User');

const express = require('express');
const app = express();
require("../app.js");




describe('User Model', function() {
	describe('#save()', function() {

		it('should not save a new User without a Username or Password created', function(done) {
				const user = new User({
					email: "user999@gmail.com",
					tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
				});
      				user.save(function(err) {
	        			expect(err).to.exist
          				.and.be.instanceof(Error)
        				done();
      			});
		});

		it('should not save a new User without an email created', function(done) {
				const user = new User({
  					username: "user999",
					password: "abc12345678",
					tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
				});
      				user.save(function(err) {
	        			expect(err).to.exist
          				.and.be.instanceof(Error)
        				done();
      			});
		});
	});
});