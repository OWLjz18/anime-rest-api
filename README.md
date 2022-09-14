<h1 align="center">anime-rest-api</h1>

API REST of animes, using Typescript and Postgresql, created for study purposes.

- - -

### Pre-Requirements ### 
 
* [git](https://git-scm.com/)
* [node](https://nodejs.org/)
* [npm](https://npmjs.com/)
* [postgresql](https://postgresql.org/)

- - - 

### Use ### 

First of all, you need to clone the repository:

``` sh
git clone 'https://github.com/OWLjz18/anime-rest-api.git'
```

It goes to the project folder:

``` sh
cd anime-rest-api
```

Next, start your Postgresql server and run the *"database/script.sql"* file.

And then run the following commands:

``` sh
npm install
npm build
npm start
```

With the Nodejs server already running, you can make the following requests from your localhost:

#### GET Methods

* Get all anime:

``` sh  
http://localhost:5000/api/v1/animes
```

* Get an anime by id:

You must specify the *"id"* of the anime:

``` sh  
http://localhost:5000/api/v1/animes/id
```

* Get the total of animes:

``` sh  
http://localhost:5000/api/v1/animes/count
```

#### POST Method

* Add a new anime:

``` sh  
http://localhost:5000/api/v1/animes
```

And you must send a JSON object like the following:

``` json
{
  "name": "Magmell Ultramarine",
  "episodes": 12
}
```

#### PUT Method

* Update an anime:

You must specify the *"id"* of the anime to update:

``` sh  
http://localhost:5000/api/v1/animes/id
```

With a JSON object that has the new data of said anime:

``` json
{
  "name": "Trese",
  "episodes": 6
}
```

#### DELETE Method

* Delete an anime:

You must specify the *"id"* of the anime to delete:

``` sh  
http://localhost:5000/api/v1/animes/id
```

- - -

### Author ###

  * *__José Zambrano__* ([OWLjz18](https://github.com/OWLjz18)) => Project Creator.
    * Email => <owl.jz18@gmail.com>
    * Instagram => [@owljz18](https://instagram.com/owljz18)

- - -

### License ###

This project is licensed under an _MIT_ license, please visit the [LICENSE.md](./LICENSE.md) file for more information about it.
