import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

export default registerAs('config', () => {
  console.log(process.env.POSTGRES_DATABASE);
  return {
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    database: {
      username: process.env.POSTGRES_USERNAME,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE,
      password: process.env.POSTGRES_PASSWORD,
      port: parseInt(process.env.POSTGRES_PORT),
    },
  };
});
// export default registerAs('config', () => ({
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
//   database: {
//     username: process.env.POSTGRES_USERNAME,
//     host: process.env.POSTGRES_HOST,
//     database: process.env.POSTGRES_DATABASE,
//     password: process.env.POSTGRES_PASSWORD,
//     port: parseInt(process.env.POSTGRES_PORT),
//   },
// }));
