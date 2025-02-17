import './card.styles.css';

const Card = ({ monster }) => {
    const { id, name, email }= monster;

    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;



// import { Component } from 'react';

// import './card.styles.css';

// class Card extends Component {
//     render() {
//         const { id, name, email }= this.props.monster;

//         return (
//             <div className='card-container'>
//                 <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     }

// }

// export default Card;