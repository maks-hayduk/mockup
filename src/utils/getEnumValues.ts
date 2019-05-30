interface IEnumObject {
  [key: string]: any;
}

const getEnumValues = (enumObject: IEnumObject) => {
  return Object.values(enumObject).map(value => value);
};

export default getEnumValues;
