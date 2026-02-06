import { Module } from "@medusajs/framework/utils"
import ApplicationService from "./service"

export const APPLICATION_MODULE = "application"

export default Module(APPLICATION_MODULE, {
  service: ApplicationService,
})
