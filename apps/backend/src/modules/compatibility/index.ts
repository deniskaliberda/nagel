import { Module } from "@medusajs/framework/utils"
import CompatibilityService from "./service"

export const COMPATIBILITY_MODULE = "compatibility"

export default Module(COMPATIBILITY_MODULE, {
  service: CompatibilityService,
})
