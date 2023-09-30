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
import { OrganizationsModule } from './organizations/organization.module';
import { SubjectsModule } from './subjects/subjects.module';
import { NotesModule } from './notes/notes.module';
import { GroupsModule } from './groups/groups.module';
import { TopicsModule } from './topics/topics.module';
import { ScoresModule } from './scores/scores.module';
import { SubtopicsModule } from './subtopics/subtopics.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: '/tmp/schema.gql',
      cache: 'bounded',
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
    OrganizationsModule,
    SubjectsModule,
    NotesModule,
    FilesModule,
    GroupsModule,
    TopicsModule,
    ScoresModule,
    SubtopicsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
