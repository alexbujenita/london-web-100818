import React from 'react'

const Painting = props =>
  <li>
    <div className='painting'>
      <h1>{props.painting.title}</h1>
      <p>{props.painting.artist.name}</p>
      <img src={props.painting.image} />
    </div>
  </li>

export default Painting


// {
//   id: '59bd5a519c18db5297a32479',
//   collecting_institution: '',
//   date: '1446',
//   dimensions: {
//     text: '11 1/2 Ã— 8 1/2 in',
//     height: 11.5,
//     width: 8.5,
//     depth: null,
//     diameter: null
//   },
//   slug: 'petrus-christus-portrait-of-a-carthusian',
//   title: 'Portrait of a Carthusian',
//   image:
//     'https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg',
//   artist: {
//     name: 'Petrus Christus',
//     hometown: 'Baarle-Hertog, Belgium',
//     birthday: '1410',
//     deathday: '1475'
//   },
//   votes: 64
// }