"use client";
import PropTypes from 'prop-types';
import questionImage from "/public/img/up.json";
import Lottie from 'react-lottie';

const LottieAnimasi = ({ tinggi, lebar }) => {
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
LottieAnimasi.propTypes = {
  tinggi: PropTypes.number,
  lebar: PropTypes.number,
};

// Define default props
LottieAnimasi.defaultProps = {
  tinggi: 400,
  lebar: 400,
};

export default LottieAnimasi;
