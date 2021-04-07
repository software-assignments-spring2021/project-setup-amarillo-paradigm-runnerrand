const chai = require('chai');

const { assert } = chai;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

// POST /save-restaurant
describe('post-task test', () => {
    it('should respond with JSON data = {data:{xxx,xxx,xxx,xxx}}', () => {
      chai.request(app)
        
        });
    });
  });