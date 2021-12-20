const db = require('../database/models');

const genresController = {
    'index': (req, res) => (res.render('index', {title:"Listado de películas!"}))
        

}

module.exports = genresController;