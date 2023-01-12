module.exports = {
  GetKeyByValue: (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  },

  MergeObjects: (obj1, obj2) => {
    return Object.assign(obj1, obj2);
  },
};
