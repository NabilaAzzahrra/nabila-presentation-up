"use client";
import PropTypes from 'prop-types';
import questionImage from "/public/json/lamp.json";
import Lottie from 'react-lottie';

const BackgroundAnimasi = ({ tinggi, lebar }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: questionImage,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={100} width={100} />;
};

// Define prop types
BackgroundAnimasi.propTypes = {
  tinggi: PropTypes.number,
  lebar: PropTypes.number,
};

// Define default props
BackgroundAnimasi.defaultProps = {
  tinggi: 400,
  lebar: 400,
};

export default BackgroundAnimasi;
