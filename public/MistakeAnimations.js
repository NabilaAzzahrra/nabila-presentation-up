"use client";
import PropTypes from 'prop-types';
import questionImage from "/public/json/mistake.json";
import Lottie from 'react-lottie';

const MistakeAnimasi = ({ tinggi, lebar }) => {
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
MistakeAnimasi.propTypes = {
  tinggi: PropTypes.number,
  lebar: PropTypes.number,
};

// Define default props
MistakeAnimasi.defaultProps = {
  tinggi: 400,
  lebar: 400,
};

export default MistakeAnimasi;
