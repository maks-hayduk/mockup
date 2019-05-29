interface IEnumObject {
  [key: string]: any;
}

const getEnumValues = (enumObject: IEnumObject) => {
  let filterLinks = [];
  for (const i in enumObject) {
    filterLinks.push(i);
  }
  return filterLinks;
};

export default getEnumValues;
