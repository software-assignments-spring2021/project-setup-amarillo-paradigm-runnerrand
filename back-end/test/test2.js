const chai = require('chai');

const { assert } = chai;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

// POST /save-restaurant
describe('post-task test', () => {
    it('should respond with JSON data = {data:{xxx,xxx,xxx,xxx}}', () => {
      chai.request(app)
        .post('/post-task')
        .send({title:"1",task_id:"2"})
        .end((err, res) => {
          console.log("Response Body:", res.body);
          assert.equal(res.body.data.taskTitle,"1");
          assert.equal(res.body.data.taskID,"2");
        });
    });
  });