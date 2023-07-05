import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SchoolsModule } from './schools/schools.module';
import { SubjectsModule } from './subjects/subjects.module';
import { DocsModule } from './docs/docs.module';
import { GradesModule } from './grades/grades.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: '/tmp/schema.gql',
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
    }),
    UsersModule,
    AuthModule,
    SchoolsModule,
    SubjectsModule,
    DocsModule,
    GradesModule,
    TopicsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
