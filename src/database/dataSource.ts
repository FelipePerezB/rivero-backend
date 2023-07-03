// import { ConfigService } from '@nestjs/config';
// import config from 'src/config';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// const configService = new ConfigService();

const connectionSource = new DataSource({
  type: 'postgres',
  username: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT),
  logging: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/dattabase/migrations/*.ts'],
});
export default connectionSource;
