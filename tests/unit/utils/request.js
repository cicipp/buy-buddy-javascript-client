import { get, post, put, del } from 'src/utils/request';
import express from 'express';
import bodyParser from 'body-parser';

const generatePort = () => Math.floor(Math.random() * 5000 + 45000);
const app = express();
let port = null;

describe('request', () => {
  before(() => {
    app.use(bodyParser.json()); // for parsing application/json

    app.get('/', (req, res) => {
      expect(req.get('Content-Type')).to.be.not.equal('application/json');
      expect(req.get('Accept')).to.be.equal('application/json');

      res.send({ ok: 'bar' });
    });

    app.post('/', (req, res) => {
      expect(req.get('Content-Type')).to.be.equal('application/json');
      expect(req.get('Accept')).to.be.equal('application/json');

      res.json(req.body);
    });

    app.put('/', (req, res) => {
      expect(req.get('Content-Type')).to.be.equal('application/json');
      expect(req.get('Accept')).to.be.equal('application/json');

      res.json(req.body);
    });

    app.delete('/', (req, res) => {
      expect(req.get('Content-Type')).to.be.not.equal('application/json');
      expect(req.get('Accept')).to.be.equal('application/json');

      res.json({ ok: 'bar' });
    });
  });

  beforeEach(() => {
    port = generatePort();
  });

  it('should send an HTTP GET request', (done) => {
    const server = app.listen(port, () => {
      get(`http://localhost:${port}/`)
      .then(res => {
        expect(res).to.be.an('object');
        expect(res).to.have.all.keys(['ok']);

        server.close();
      })
      .then(done);
    });
  });

  it('should send an HTTP POST request', (done) => {
    const server = app.listen(port, () => {
      post(`http://localhost:${port}/`, { foo: 'bar' })
      .then(res => {
        expect(res).to.be.an('object');
        expect(res).to.have.all.keys(['foo']);

        server.close();
      })
      .then(done);
    });
  });

  it('should send an HTTP PUT request', (done) => {
    const server = app.listen(port, () => {
      put(`http://localhost:${port}/`, { foo: 'bar' })
      .then(res => {
        expect(res).to.be.an('object');
        expect(res).to.have.all.keys(['foo']);

        server.close();
      })
      .then(done);
    });
  });

  it('should send an HTTP DELETE request', (done) => {
    const server = app.listen(port, () => {
      del(`http://localhost:${port}/`)
      .then(res => {
        expect(res).to.be.an('object');
        expect(res).to.have.all.keys(['ok']);

        server.close();
      })
      .then(done);
    });
  });
});
