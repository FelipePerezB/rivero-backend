import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, host, database, password, port } =
          configService.database;
        return {
          type: 'postgres',
          username,
          host,
          database,
          password,
          port,
          synchronize: false,
          autoLoadEntities: true,
          sslmode: 'require',
        };
      },
      inject: [config.KEY],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
