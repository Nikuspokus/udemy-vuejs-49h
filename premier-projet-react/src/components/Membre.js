import React from 'react'

// const Membre = (props) => {
//   const name = props.nom
// console.log(props);
//   return (
//    <h2>Membre de ma famille : {name.toUpperCase()}</h2>
//    )
// }
const Membre = ({nom}) => {
console.log(nom);
  return (
   <h2>Membre de ma famille : {nom.toUpperCase()}</h2>
   )
}

export default Membre