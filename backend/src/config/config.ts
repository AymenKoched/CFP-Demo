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

const DEFAULT_PORT = 3000;
const DEFAULT_ENVIRONMENT = Environment.Development;

const config: Config = {
  port: Number(process.env.PORT) || DEFAULT_PORT,
  environment: process.env.ENVIRONMENT as Environment || DEFAULT_ENVIRONMENT,
};

export default config;
