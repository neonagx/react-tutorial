import React from 'react';
import PropTypes from 'prop-types'
import './AnimalCard.css';

import AnimaDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card';

export default function AnimalCard({
    additional,
    name,
    // scientificName,
    showAdditional,
    size,
    ...props
}) {
    return (
        <Card title="Animal" details={
            <AnimaDetails
                {...props}
            />}>
            <h2>{name}</h2>
            <h4>{size} kg</h4>
            {/* <h3>{scientificName}</h3> */}
            {/* <div>{diet.join(', ')}.</div> */}
            {/* <button onClick={() => showAdditional(additional)}>More Info</button> */}
        </Card>

    )
}

AnimalCard.propTypes = {
    // additional: PropTypes.shape({
    //     link: PropTypes.string,
    //     notes: PropTypes.string
    // }),
    // diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    // scientificName: PropTypes.string.isRequired,
    // showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
}

// AnimalCard.defaultProps = {
//     additional: {
//         notes: 'No Additional Information'
//     }
// }