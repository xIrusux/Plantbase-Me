![A Perfect Day For Bananafish, by J. D. Salinger](https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447411550l/27819869.jpg)

# Plantbase-Me 🌱

Help save all the animals, one product at a time.

---

## Team

- Emmanuel (Scrum Master / Scrummy Mummy)
- Christine (Quality Assurance)
- Colette (UX/UI)
- Sam (DevOps)
- Gregor (DevOps)

---

## Project idea

## Summary
Crowd sourced review app for plant-based products | a mobile app

## Detail
Our app idea lets our users search for a product category they are familiar with from the non-plant-based world. It then shows them a list of ranked plant-based alternatives with honest reviews, sorted by their number of crowdsourced upvotes.

The idea is to encourage more people to cut out some animal products, with a focus on encouraging more people to make a few changes that they're comfortable with, rather than a few people doing everything they can and the rest feeling alienated. We want to help curious shoppers find the right product fit for their need and manage their expectations (e.g. this cheese alternative melts great on pizza).

---

## Installation Guide

- Clone this Repo
- Run `npm i`
- Create a .env file in the route with:
  - PLANTBASE_DB_URL
  - LOCAL_DB_URL
  - TEST_DB_URL
- Run `npm run dev` to run the server with nodemon

---

### Main User Journey

`As a user, I'd like to find a plant-based product related to a craving through three pages`

---

## What we learnt - Stuck and [sometimes] Unstuck

### Topic: Server set up

1. in app.js whats the difference between:

```javascript
app.use(bodyParser.urlencoded());
app.use(bodyParser.json
```

2. Why do we require express and call it as a function?

```javascript
const app = express();
```

3.

### Topic: Why does tape group our tests?

1. When we run a second set of tape tests our second set are grouped under the first heading. Why?

![](https://i.imgur.com/m0iJ1d1.png)

Seems to do with asynchronicity where the second set are running before the t.end of the first set.

See these similar issues:
[381](https://github.com/substack/tape/issues/381)
[358](https://github.com/substack/tape/issues/358)

You can use:

[tape-promise](https://www.npmjs.com/package/tape-promise)

## Create a test DB

![](https://i.imgur.com/yWWagb2.png)

## Testing a post request

- How can we test a post request?
- Can we use a get request after?
- We had a problem with promises

---

## Our initial design



https://www.figma.com/file/OFOCFI5zOY4wOEgZMCRlUZ/Plantbase-Me?node-id=0%3A1
