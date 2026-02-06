import { model } from "@medusajs/framework/utils"

export const DeviceFastener = model.define("device_fastener", {
  id: model.id().primaryKey(),
  device_id: model.text(),
  device_name: model.text(),
  device_manufacturer: model.text(),
  fastener_product_id: model.text(),
  fastener_sku: model.text(),
  compatible: model.boolean().default(true),
  notes: model.text().nullable(),
})
