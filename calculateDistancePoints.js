const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (hillSize === 'normal') {
	return (distance - kPoint)*2 + 60;
  }
  else if (hillSize === 'large') {
    return (distance - kPoint)*1.8 + 60;
  }
  else if (hillSize === 'flying') {
    return (distance - kPoint)*1.2 + 120;
  }
  else {
    return 'please insert correct hill size';
  }
};

module.exports = calculateDistancePoints;