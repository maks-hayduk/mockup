const uuid = () => {
  let id = 2;
  return () => `${++id}`;
};

export default uuid;
