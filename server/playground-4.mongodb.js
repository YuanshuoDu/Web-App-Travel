/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('test');

// Insert a few documents into the stories collection.
db.getCollection('stories').insertMany([
  {
    'creator': 'David Santamaria',
    'title': 'Trip to Barcelona',
    'country': 'Spain',
    'city': 'Barcelona',
    'message': 'Sagrada Familia, Barri Gòtic, Barceloneta Beach, Ramblas...',
    'tags': ['culture', 'summer'],
    'likeCount': 0,
    'createdAt': new Date('2023-10-18T17:19:00Z'),
    'selectedPicture': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QDQ' // Inserta los datos base64 de la imagen de Barcelona
  },
  {
    'creator': 'Eva López',
    'title': 'Exploring Rome',
    'country': 'Italy',
    'city': 'Rome',
    'message': 'Colosseum, Vatican City, Trevi Fountain...',
    'tags': ['history', 'architecture'],
    'likeCount': 0,
    'createdAt': new Date('2023-10-19T09:30:00Z'),
    'selectedPicture': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QDQ' // Inserta los datos base64 de la imagen de Roma
  },
  {
    'creator': 'Alice Johnson',
    'title': 'Hiking in the Swiss Alps',
    'country': 'Switzerland',
    'city': 'Interlaken',
    'message': 'Eiger, Mönch, Jungfrau, beautiful alpine landscapes...',
    'tags': ['adventure', 'nature'],
    'likeCount': 0,
    'createdAt': new Date('2023-10-20T14:45:00Z'),
    'selectedPicture': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QDQ' // Inserta los datos base64 de la imagen de los Alpes Suizos
  },
  {
    'creator': 'Carlos Rodriguez',
    'title': 'Beach Vacation in Bali',
    'country': 'Indonesia',
    'city': 'Bali',
    'message': 'White sandy beaches, rice terraces, Balinese temples...',
    'tags': ['beach', 'relaxation'],
    'likeCount': 0,
    'createdAt': new Date('2023-10-21T12:15:00Z'),
    'selectedPicture': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QDQ' // Inserta los datos base64 de la imagen de Bali
  }
]);
