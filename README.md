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
$ ember init
```
...and type `n` to all the resulting prompts. This downloads needed packages without overwriting the project files. There must be a better way to do this, but we haven't yet determined what that is.

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
