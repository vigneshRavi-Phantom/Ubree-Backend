import { Model } from "sequelize";

export const upsert = (values: any, condition: any) => {
  return (Model as any).findOne({ where: condition }).then(function (obj: any) {
    // update
    if (obj) return obj.update(values);
    // insert
    return (Model as any).create(values);
  });
};
