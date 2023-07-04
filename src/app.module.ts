import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user-entities/users/users.module';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import config from './config';
import { SubjectsModule } from './school-entities/subjects/subjects.module';
import { DocsModule } from './docs/docs.module';
import { GradesModule } from './school-entities/grades/grades.module';
import { InstitutesModule } from './school-entities/institutes/institutes.module';
import { AnswersModule } from './user-entities/answers/answers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), '/tmp/schema.gql'),
      // autoSchemaFile:  true,
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
    }),
    AnswersModule,
    UsersModule,
    DatabaseModule,
    SubjectsModule,
    DocsModule,
    GradesModule,
    InstitutesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
