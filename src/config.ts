import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

export default registerAs('config', () => {
  return {
    clerk: {
      api_key_backend: process.env.CLERK_BACKEND_API_KEY,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  };
});
