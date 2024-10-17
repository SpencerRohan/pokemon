# Givebutter Frontend Take-home

## Overview

Our goal is to fix and enhance a Pokedex application. If you are unfamiliar with the world of Pokemon, here is a brief explanation:

> The Pokedex is an electronic device created and designed to catalog and provide information regarding the various species of Pokemon featured in the Pokemon video game, anime and manga series.
 
[Source](https://pokemon.fandom.com/wiki/Pokedex)
 
Our version of the Pokedex is able to list and search through Pokemon. However, our search is a bit buggy. Additionally, we want to add a feature that shows a selected Pokemon's details like its **type**, **moves**, and **evolution chain**.

Your time is valuable, and we are extremely appreciative of you participating in this assessment. We're looking to gauge your ability to read and edit code, understand instructions, and deliver features, just as you would during your typical day-to-day work. We expect this test to take no more than one to two hours and ask to complete this work within the next two days. Upon submit, we will review and provide feedback to you regardless of our decision to continue the process.

Please update and add code in `App.js` and `index.css` based on the requirements found below. Additionally, we ask you to edit the `readme.md` with answers to a few questions found in the `Follow-up Questions` section also found below.

When you are finished, please upload your completed work to your Github and invite `@gperl27` to view it. **Do not open a PR please.**

## Setup

- This repo was scaffolded using `create-react-app`. As such, this app requires a stable version of `node` to get up and running.
- Clone this repo and run `npm install`.
- To run the app, run `npm start`.
- Please reach out to the Givebutter team if you have any issues with the initial setup or have any problems when running the initial app.

## Requirements

### Search
- Typing in the search input should filter the existing Pokemon list and render only matches found
- Fix any bugs that prevent the search functionality from working correctly
- If there are no results from search, render "No Results Found"
- The search results container should be scrollable
- The UI should match the below mockup

![](mockup0.png)

### Details Card
     
- Clicking "Get Details" for any given Pokemon should render a card that has the Pokemon's `name`, `types`, `moves`, and `evolution chain`
- Use the api functions defined in `api.js` to retrieve this data. Adding new endpoints or editing existing ones are out of scope
- The details card should match the below mockup

![](mockup1.png)

## Follow-up Questions

Please take some time to answer the following questions. Your answers should go directly in this `readme`.

- Given more time, what would you suggest for improving the performance of this app?

1. Thinking ahead, I created a temporary caching layer within the app.js file.  Though it could be improved upon with a Context API pattern or middleware storage - maybe?
2. Data could be retrieved with something like GraphQL to reduce over-fetching.
3. Pagination or Infinite scrolling adds to reduce initial pokemon load.
4. Debouncing Search Input - the keystroke trigger updates the state and therefore causes the resulting list to update.

- Is there anything you would consider doing if we were to go live with this app?

1. I would definitely consider typescript for this type of project.  I am trusting there aren't any edge cases in handling the data right now and that is a recipe for disaster.
2. I would add jest unit testing to ensure data is as expected outside of typescript types.
3. Adding Prettier and Eslint along with vscode settings would be helpful for keeping the app looking nice
4. There were a handful of warnings/errors at build time, this could be due to node version issues or outdated packages.  Would suggest fixing those.
5. Accessibility and SEO could be improved.  I worked on a handful of areas, being semantic and adding what I could, but adding more robust landmarks would be best.
6. Favicons, meta data are missing off the app
7. Little friendly design and UI, saw there were sprites in the API!

- What was the most challenging aspect of this work for you (if at all)?
1. The styling choices in the demonstration were a bit off and gave me hesitation to code pixel perfect.  For example the list items and line heights in the pokemon details indicated an alignment that won't look as nice as bulbasaur. I would typically vocalize this to the team before starting a ticket.  I ended up following the designs, but I think there were cleaner ways to implement some of the alignment if flexibility was there.
2. I have never played or watched Pokemon -- I got sucked into Cowboy Bebop over Pokemon, hopefully that redeems the start of this comment.  Api was cool though!

Time Start: 7:30
Time Finish: 9:30 (Pokeball anination took ~30 minutes)