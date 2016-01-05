# Ember-cli-rangesliderjs

In a hurry?: `ember install ember-cli-rangesliderjs`

Here is a link to the original plugin that we are wraping:
https://andreruffert.github.io/rangeslider.js/

## Basic Usage
```
{{rangeslider-js
  min=min
  max=max
  start=value
  slide=(action (mut value))
  slideEnd=(action (mut value))}}
```
And below is the normal fare for getting development of this addon setup:

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
