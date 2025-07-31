import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  environment: Environment;
}

enum Environment {
  Development = 'development',
  Production = 'production',
}

export const DEFAULT_PORT = 4000;
export const DEFAULT_ENVIRONMENT = Environment.Development;

export const config: Config = {
  port: Number(process.env.PORT) || DEFAULT_PORT,
  environment: (process.env.ENVIRONMENT as Environment) || DEFAULT_ENVIRONMENT,
};
