const uuid = () => {
  const date = new Date();
  const randNumber = Math.ceil(Math.random() * 1000);
  return date.getMinutes() + randNumber + '';
};

export default uuid;
