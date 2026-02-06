import { defineConfig, loadEnv } from "@medusajs/framework/utils"

loadEnv(process.env.NODE_ENV || "development", process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL ?? "postgres://localhost/nagel-medusa",
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS ?? "http://localhost:8000",
      adminCors: process.env.ADMIN_CORS ?? "http://localhost:5173",
      authCors: process.env.AUTH_CORS ?? "http://localhost:5173,http://localhost:8000",
    },
  },
  modules: [
    {
      resolve: "./src/modules/compatibility",
    },
    {
      resolve: "./src/modules/application",
    },
  ],
  plugins: [
    // Stripe payment provider
    // {
    //   resolve: "@medusajs/medusa/payment-stripe",
    //   options: {
    //     apiKey: process.env.STRIPE_API_KEY,
    //   },
    // },

    // Resend notification provider
    // {
    //   resolve: "@medusajs/medusa/notification-resend",
    //   options: {
    //     apiKey: process.env.RESEND_API_KEY,
    //     fromEmail: process.env.RESEND_FROM_EMAIL ?? "info@nagel-paul.de",
    //   },
    // },
  ],
})
