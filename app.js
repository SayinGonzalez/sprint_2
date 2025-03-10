const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-06:grupo06@cursadanodejs.ls9ii.mongodb.net/Node-js')
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(error => console.error('Error al conectar a MongoDB:', error));

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String
}, { collection: 'Grupo-06' });

const SuperHero = mongoose.model('SuperHero', superheroSchema);

/* ----------------------------------------------- */
/*              Insertar un documento              */

// async function insertSuperHero() {
//     const hero = new SuperHero({
//         nombreSuperHeroe: 'Superman',
//         nombreReal: 'Clark Kent',
//         edad: 35,
//         planetaOrigen: 'Krypton',
//         debilidad: 'Kriptonita',
//         poderes: ['Super fuerza', 'Volar', 'Visión de rayos X'],
//         aliados: ['Batman', 'Mujer Maravilla'],
//         enemigos: ['Lex Luthor', 'Doomsday'],
//         creador: 'Sayin'
//     });
//     await hero.save();
//     console.log('SuperHero insertado:', hero);
// }

// insertSuperHero();

/* ----------------------------------------------- */
/*             Actualizar un documento             */

// async function updateSuperHero(nombreSuperHeroe) {
//     const result = await SuperHero.updateOne(
//         { nombreSuperHeroe: nombreSuperHeroe },
//         { $set: { edad: 36 } });
//     console.log('Resultado de la actualización:', result);
// }

// updateSuperHero('Superman');

/* ----------------------------------------------- */
/*             Eliminar un documento               */

// async function deleteSuperHero(nombreSuperHeroe) {
//     const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
//     console.log('Superhéroe eliminado:', result);
// }

// deleteSuperHero('Spiderman');


/* ----------------------------------------------- */
/*               Buscar documentos                 */

async function findSuperHeroes(planetaOrigen) {
    const heroes = await SuperHero.find({ planetaOrigen: planetaOrigen
     });
    console.log('Superhéroes encontrados:', heroes);
};

findSuperHeroes('Krypton');
findSuperHeroes('Marte');