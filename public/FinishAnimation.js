"use client";
import PropTypes from 'prop-types';
import questionImage from "/public/json/finish.json";
import Lottie from 'react-lottie';

const FinishAnimasi = ({ tinggi, lebar }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: questionImage,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={tinggi} width={lebar} />;
};

// Define prop types
FinishAnimasi.propTypes = {
  tinggi: PropTypes.number,
  lebar: PropTypes.number,
};

// Define default props
FinishAnimasi.defaultProps = {
  tinggi: 400,
  lebar: 400,
};

export default FinishAnimasi;
