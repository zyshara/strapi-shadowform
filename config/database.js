module.exports = ({ env }) => {
  const isProd = env("NODE_ENV") === "production"

  return {
    connection: isProd
      ? {
          client: "postgres",
          connection: {
            connectionString: env("DATABASE_URL"),
            ssl: env.bool("DATABASE_SSL", true)
              ? { rejectUnauthorized: false }
              : false,
          },
          pool: { min: 2, max: 10 },
        }
      : {
          client: "sqlite",
          connection: {
            filename: ".tmp/data.db",
          },
          useNullAsDefault: true,
        },
  }
}
