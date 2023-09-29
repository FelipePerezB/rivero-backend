import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotesService } from './notes.service';
import { Note } from '../generated/note/note.model';
import { NoteCreateInput } from '../generated/note/note-create.input';
import { NoteUpdateInput } from '../generated/note/note-update.input';
import { Prisma } from '@prisma/client';
import { NoteWhereInput } from '../generated/note/note-where.input';
import { NoteWhereUniqueInput } from '../generated/note/note-where-unique.input';

@Resolver(() => Note)
export class NotesResolver {
  constructor(private readonly notesService: NotesService) {}

  @Mutation(() => Note)
  createNote(@Args('createNoteInput') createNoteInput: NoteCreateInput) {
    return this.notesService.create(createNoteInput as Prisma.NoteCreateInput);
  }

  @Query(() => [Note], { name: 'notes' })
  findAll(@Args('where', { nullable: true }) where?: NoteWhereInput) {
    return this.notesService.findAll({ where } as {
      where: Prisma.NoteWhereInput;
    });
  }

  @Query(() => Note, { name: 'note' })
  findOne(@Args('where') where?: NoteWhereUniqueInput) {
    return this.notesService.findOne(where as Prisma.NoteWhereUniqueInput);
  }

  @Mutation(() => Note)
  updateNote(
    @Args('id') id: number,
    @Args('updateNoteInput') updateNoteInput: NoteUpdateInput,
  ) {
    return this.notesService.update({
      where: { id },
      data: updateNoteInput as unknown as Prisma.NoteUpdateInput,
    });
  }

  @Mutation(() => Note)
  removeNote(@Args('id', { type: () => Int }) id: number) {
    return this.notesService.remove({ id });
  }
}
