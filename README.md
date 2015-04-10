ThriftOR
==============

#### A simple Ruby On Rails backend, Ember frontend site where you can view thrift stores in Portland, OR.

Installation and Usage
------------

To run the app simply clone this repository and in your terminal run
```
$ postgres
```
In the rails folder run
```
$rake db:create db:migrate db:seed
```
Then, in the rails folder run
```
$ bundle
```
Then, in the rails folder run
```
$ rails s
```
Go into the ember project and then run
```
$ npm install
$ bower install
```
Still within the ember directory, run
```
$ ember server --proxy http://localhost:3000
```
Then launch a browser and enter the url `localhost:4200`

### No Known Bugs
------------

Motivation
--------
> **To Practice:**
>- Using Rails and Ember Together

Authors
------

Grace Mekarski, Lizzie Koehler, Benjamin Herson, Jackie Fletcher, Gabe Finch, Frank Meza, Tucker Mayo

License
-------

MIT license
