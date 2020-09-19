import { Model } from "sequelize";

export const upsert = (values: any, condition: any) => {
  //@ts-ignore
  return Model.findOne({ where: condition }).then(function (obj) {
    // update
    if (obj) return obj.update(values);
    // insert
    //@ts-ignore
    return Model.create(values);
  });
};
