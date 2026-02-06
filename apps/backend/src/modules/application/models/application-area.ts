import { model } from "@medusajs/framework/utils"

export const ApplicationArea = model.define("application_area", {
  id: model.id().primaryKey(),
  gewerk: model.text(),
  anwendung: model.text(),
  description: model.text().nullable(),
  product_ids: model.array(),
})
