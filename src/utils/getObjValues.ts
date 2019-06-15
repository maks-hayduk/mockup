interface IObject {
  [key: string]: any;
}

const getObjValues = (enumObject: IObject) => {
  return Object.values(enumObject).map(value => value);
};

export default getObjValues;
