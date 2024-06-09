"use client";
import PropTypes from 'prop-types';
import questionImage from "/public/json/metode.json";
import Lottie from 'react-lottie';

const MetodeAnimasi = ({ tinggi, lebar }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: questionImage,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={100} width={200} />;
};

// Define prop types
MetodeAnimasi.propTypes = {
  tinggi: PropTypes.number,
  lebar: PropTypes.number,
};

// Define default props
MetodeAnimasi.defaultProps = {
  tinggi: 400,
  lebar: 400,
};

export default MetodeAnimasi;
