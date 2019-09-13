const request = require("supertest");
const tape = require("tape");
const _test = require("tape-promise").default;

const test = _test(tape);
const app = require("../app");

test("Home route should return HTML content", t => {
  request(app)
    .get("/")
    .end((err, res) => {
      t.equal(
        res.headers["content-type"],
        "text/html; charset=utf-8",
        "Content type is html"
      );
      t.error(err, "There is no error");
      t.end();
    });
});

test("Home route should return with statuscode 200", t => {
  request(app)
    .get("/")
    .end((err, res) => {
      t.plan(2);
      t.equal(res.status, 200, "Status code is 200");
      t.error(err, "There is no error");
      t.end();
    });
});

test("Error loads up correctly for 404", t => {
  request(app)
    .get("/foobar")
    .end((err, res) => {
      t.equal(res.status, 404, "Status code is 404");
      t.error(err, "There is no error");
      t.end();
    });
});

test("Results Page gives correct status response", t => {
  request(app)
    .get("/results")
    .end((err, res) => {
      t.equal(res.status, 200, "Status code is 200");
      t.error(err, "There is no error");
      t.end();
    });
});

test("Results Page gives correct content type", t => {
  request(app)
    .get("/results")
    .end((err, res) => {
      t.equal(
        res.headers["content-type"],
        "text/html; charset=utf-8",
        "Content type is HTML"
      );
      t.error(err, "There is no error");
      t.end();
    });
});

test("Product Page gives correct status response for item 1", t => {
  request(app)
    .get("/product/1")
    .end((err, res) => {
      t.equal(res.status, 200, "Status code is 200");
      t.error(err, "This is error");
      t.end();
    });
});

test("Product Page gives correct content type for item 1", t => {
  request(app)
    .get("/product/1")
    .end((err, res) => {
      t.equal(
        res.headers["content-type"],
        "text/html; charset=utf-8",
        "Content type is HTML"
      );
      t.error(err, "There is no error");
      t.end();
    });
});
