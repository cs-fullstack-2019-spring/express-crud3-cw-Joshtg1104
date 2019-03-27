var express = require('express');
var router = express.Router();
var PikaPika = require('../models/PokedexSchema');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/pokedex/addPokemon', (req, res) => {
    PikaPika.create({
        pokedex_number: req.query.pokedex_number,
        name: req.query.name,
        hp: req.query.hp,
        attack: req.query.attack,
        defense: req.query.defense,
        speed: req.query.speed,
        sp_atk: req.query.sp_atk,
        sp_def: req.query.sp_def,
        main_type: req.query.main_type,
    }, (error, results) => {
        if (error) {
            res.send(error)
        } else {
            res.send('Pokemon Added')
        }
    })
});


router.put('/pokedex/updatePokemon/:pokedex_number', (req, res) => {
    PikaPika.updateOne({pokedex_number: req.query.pokedex_number}, {
        name: req.query.name,
        hp: req.query.hp,
        attack: req.query.attack,
        defense: req.query.defense,
        speed: req.query.speed,
        sp_atk: req.query.sp_atk,
        sp_def: req.query.sp_def,
        main_type: req.query.main_type,
    }, (error, results) => {
        if (error) {
            res.send(error)
        } else {
            res.send('Pokemon Updated')
        }
    })
});

router.delete('/pokedex/deletePokemon/:pokedex_number', (req, res) => {
    PikaPika.deleteOne({pokedex_number: req.query.pokedex_number}, (error) => {
        if (error) {
            res.send(error)
        } else {
            res.send('Pokemon Deleted')
        }
    })
});

router.get('/pokedex/findPokemon/:pokedex_number', (req, res) => {
    PikaPika.find({pokedex_number: req.query.pokedex_number}, (error, results) => {
        if (error) {
            res.send(error)
        } else {
            res.send('Found Pokemon')
        }
    })
});


router.get('/pokedex/allPokemon', (req, res) => {
    PikaPika.find({}, (error, results) => {
        if (error) {
            res.send(error)
        } else {
            res.send('Pokemon List')
        }
    })
});

module.exports = router;
