# Dungeon-Forged

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table-of-Contents

- [Description](#description)
- [Deployed Site](#deployed-site)
- [Features](#features)
- [Technologies](#technologies)
- [Future Development](#future-development)
- [Credits](#credits)

## Description

This is a collaboration project to create a Full-Stack single page application (SPA) using the MERN stack (MongoDB, Express, React, and Node). Dungeon Forge is an application where users can generate and save their Dungeons and Dragons characters to their own personalized user account, as well as download their PDF character sheet for later.

## Deployed Site

Follow [this link]([insert later]) to view and use our site!

## Features

[insert later]

<p align="center">
<img alt="[insert later]" src="./assets/images/dungeon-forged-screenshot.jpg"/>
</p>

[insert later]

<p align="center">
<a href="https://youtu.be/axO73hqslPs">
<img alt="[insert later]" src="./assets/images/dungeon-forged-demo.gif" />
</a>
<br>(Click the thumbnail above or this <a href="[insert later]" target="_blank">link</a> to view the demonstration video on YouTube.)
</p>

## Technologies

- HTML
- CSS
- JavaScript
- Node.js
- MongoDB
- npm
- [Express.js](https://expressjs.com/)
- [Mongoose.js](https://mongoosejs.com/)
- [create-react-app](https://github.com/facebook/create-react-app)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [@apollo/client](https://www.npmjs.com/package/@apollo/client)
- [apollo-server-express](https://www.npmjs.com/package/apollo-server-express)
- [graphQL](https://graphql.org/)
- [JWT](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [concurrently](https://www.npmjs.com/package/concurrently)
- [faker.js](https://fakerjsdocs.netlify.app/)

## Future Development

This project is currently in a developmental state. Many features need to be added in order to make it an MVP SPA. In the future, we would like to add the following improvements:

- A user-friendly front-end graphical interface using React components and CSS styling. This includes, but is not limited to:
  - A navbar header section that has funcitonal clickable links.
  - A login/signup page where users can either create a new account or log into their existing account.
  - A dashboard page where users can view all of their created characters upon logging in.
  - A character creation page that allows users to fill out the associated form in order to create a new character.
  - A stylized footer that includes a link to the GitHub page, our logo, and basic copyright/licencing information.
- We would like to also add mobile support for the site so that it is easily used on both mobile and desktop, reaching a much larger audience in terms of accessibility.

After reaching MVP status, the following changes would greatly elevate the user experience of our application:

- We would love to implement the following features to the character form itself:
  - Helper functions to automatically calculate certain statistics for the users. For example, a character's athletics score will always equal their strength modifier plus their proficiency bonus if they are proficient in that stat. Instead of users filling out both the strength and the athletics stat manually, the athletics stat will update in real time according to the value placed in the strength box.
  - A larger database of information so that the character form behaves in a "smart" fashion, allowing users to select their race, class, spells, and etc. from a list of options. This way, users can save time by simply selecting the option they're looking for instead of typing out the entire feature manually each time.
  - A "homebrew" checkbox that allows users to override certain functions. For example, if the user wishes to change a statistic that is auto-calculated (ex: the player recieved a custom magic item that increases their athletics statistic by 3), they can simply check the box and input any additional modifiers that they wish to include.
- We would like to implement a feature in which users can easily export their character sheet as a printable and downloadable pdf form for their convenience.
- It would be nice to allow users to add "homebrew" items, spells, features, and etc to our database so that other users can then add those elements to their character list utilizing a quick lookup feature. This way, homebrew traits that are used more than once are much more easily added to the character sheet.
- Eventually we'd like to add support for players who wish to create a multiclassed character.
- A FAQ page that gives the user more information for common questions about the usage of our site.
- An option that allows users to generate a randomized character sheet for both the entire character and also for smaller sections (ex: picking the wizard class but randomizing the subclass).

We're always interested in refactoring code to improve it's functionality. If you would like to suggest your own improvements, you can reach our development team at the links below.

## Credits

### Contributers

| **Ashley Smith**                                             | **Jack Ford**                            | **Jackson Mason**                                                        | **Kaia Innes**                                                  |
| ------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------- |
| - [Github](https://github.com/ashlynn4567)                   | - [Github](https://github.com/SaintShay) | - [Github](https://github.com/ShibuyaCho)                                | - [Github](https://github.com/Re1d0n)                           |
| - [LinkedIn](https://www.linkedin.com/in/ashley-lynn-smith/) | - [LinkedIn]([insert later])             | - [LinkedIn](https://www.linkedin.com/mwlite/in/jackson-mason-28b043228) | - [LinkedIn](https://www.linkedin.com/in/kaia-innes-960034224/) |

### Acknowledgements

This project was built with the help of the University of Oregon's Coding Boot Camp.

## Licensing

The application is covered under the following license: [MIT](https://opensource.org/licenses/MIT)
