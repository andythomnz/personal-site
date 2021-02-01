import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <div className="degree-container">
    <div class="degree-logo">
      <a href={data.link} target='_blank'>
        <img src={`${BASE_PATH}/images/degrees/${data.image}`} alt={data.school} />
      </a>
    </div>
    <div class="degree-content">
      <header>
        <h4 className="degree">{data.degree}</h4>
        <p className="school"><a href={data.link}>{data.school}</a>, {data.year}</p>
      </header>
    </div>
  </div>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
