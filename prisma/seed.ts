import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.school.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Colegio Pucón',
    },
  });

  await prisma.school.upsert({
    where: { name: 'Colegio Alejandria' },
    update: {},
    create: {
      name: 'Colegio Alejandria',
    },
  });

  await prisma.grade.upsert({
    where: { id: 1 },
    update: {},
    create: {
      schoolId: 1,
      name: '1° Medio',
    },
  });

  await prisma.grade.upsert({
    where: { id: 2 },
    update: {},
    create: {
      schoolId: 1,
      name: '2° Medio',
    },
  });

  await prisma.grade.upsert({
    where: { id: 3 },
    update: {},
    create: {
      schoolId: 1,
      name: '3° Medio',
    },
  });

  await prisma.grade.upsert({
    where: { id: 4 },
    update: {},
    create: {
      schoolId: 1,
      name: '4° Medio',
    },
  });

  await prisma.subject.upsert({
    where: { name: 'lenguaje' },
    update: {},
    create: {
      name: 'lenguaje',
      color: '#46d37e',
    },
  });

  await prisma.subject.upsert({
    where: { name: 'matemática' },
    update: {},
    create: {
      name: 'matemática',
      color: '#e86675',
    },
  });

  await prisma.topic.upsert({
    where: { name: 'álgebra' },
    update: {},
    create: {
      name: 'álgebra',
      subjectId: 2,
    },
  });

  await prisma.topic.upsert({
    where: { name: 'geometria' },
    update: {},
    create: {
      name: 'geometria',
      subjectId: 2,
    },
  });

  await prisma.subtopic.upsert({
    where: { name: 'ecuaciones' },
    update: {},
    create: {
      name: 'ecuaciones',
      subjectId: 2,
      topicId: 1,
    },
  });

  await prisma.subtopic.upsert({
    where: { name: 'productos notables' },
    update: {},
    create: {
      name: 'productos notables',
      subjectId: 2,
      topicId: 1,
    },
  });

  await prisma.user.upsert({
    where: { email: 'felipe@prisma.io' },
    update: {},
    create: {
      externalId: 'hequeqdbqwqd',
      email: 'felipe@prisma.io',
      username: 'Felipe',
      gradeId: 1,
      role: 'ADMIN',
      schoolId: 1,
    },
  });
  await prisma.user.upsert({
    where: { email: 'martin@prisma.io' },
    update: {},
    create: {
      email: 'martin@prisma.io',
      username: 'Felipe',
      externalId: '821uqwunwsqsiw',
      gradeId: 1,
      role: 'ADMIN',
      schoolId: 1,
    },
  });
  await prisma.user.upsert({
    where: { email: 'alicia@prisma.io' },
    update: {},
    create: {
      externalId: 'wenjdnkj',
      email: 'alicia@prisma.io',
      username: 'Felipe',
      gradeId: 1,

      role: 'ADMIN',
      schoolId: 1,
    },
  });

  await prisma.doc.upsert({
    where: { id: 1 },
    update: {},
    create: {
      externalId: 'gHQW78YwuwjWQ',
      privacity: 'PRIVATE',
      content: JSON.stringify({
        type: 'doc',
        options: {
          id: 'CID812919622',
          childrens: [
            {
              type: 'page',
              options: {
                id: 'CID812819282',
                childrens: [
                  {
                    type: 'docInfo',
                    options: {
                      id: 'CID812889282',
                      title: 'SISTEMA DE ECUACIONES',
                      subtitle: 'EJE: ALGEBRA',
                    },
                  },
                ],
              },
            },
          ],
        },
      }),
      title: 'Productos notables',
      type: 'NOTES',
      Topic: {
        connect: {
          name: 'álgebra',
        },
      },
      Subtopic: {
        connect: {
          name: 'ecuaciones',
        },
      },
      Subject: {
        connect: {
          name: 'matemática',
        },
      },
      Author: {
        connect: {
          id: 3,
        },
      },
    },
  });

  await prisma.doc.upsert({
    where: { id: 2 },
    update: {},
    create: {
      privacity: 'PRIVATE',
      externalId: 'b2d6wt7dt76237t',
      content: JSON.stringify({
        type: 'doc',
        options: {
          id: 'CID812919622',
          childrens: [
            {
              type: 'page',
              options: {
                id: 'CID812819282',
                childrens: [
                  {
                    type: 'docInfo',
                    options: {
                      id: 'CID812889282',
                      title: 'SISTEMA DE ECUACIONES',
                      subtitle: 'EJE: ALGEBRA',
                    },
                  },
                ],
              },
            },
          ],
        },
      }),
      title: 'Sistema de ecuaciones',
      type: 'NOTES',
      Topic: {
        connect: {
          name: 'álgebra',
        },
      },
      Subtopic: {
        connect: {
          name: 'ecuaciones',
        },
      },
      Subject: {
        connect: {
          name: 'matemática',
        },
      },
      Author: {
        connect: {
          id: 3,
        },
      },
    },
  });

  //
  await prisma.score.upsert({
    where: { id: 1 },
    update: {},
    create: {
      alternatives: '1,2,3,4,5,5,3,4,2,4,5,5,2,4,5,4',
      score: 900,
      docId: 1,
      userId: 1,
    },
  });
  await prisma.score.upsert({
    where: { id: 2 },
    update: {},
    create: {
      alternatives: '1,2,3,4,5,5,3,4,2,4,5,5,2,4,5,4',
      score: 800,
      docId: 1,
      userId: 2,
    },
  });
  await prisma.score.upsert({
    where: { id: 3 },
    update: {},
    create: {
      alternatives: '1,2,3,4,5,5,3,4,2,4,5,5,2,4,5,4',
      score: 750,
      docId: 1,
      userId: 3,
    },
  });
  await prisma.score.upsert({
    where: { id: 4 },
    update: {},
    create: {
      alternatives: '1,2,3,4,5,5,3,4,2,4,5,5,2,4,5,4',
      score: 850,
      docId: 1,
      userId: 1,
    },
  });
  await prisma.score.upsert({
    where: { id: 5 },
    update: {},
    create: {
      alternatives: '1,2,3,4,5,5,3,4,2,4,5,5,2,4,5,4',
      score: 870,
      docId: 2,
      userId: 2,
    },
  });
  await prisma.score.upsert({
    where: { id: 6 },
    update: {},
    create: {
      alternatives: '1,2,3,4,5,5,3,4,2,4,5,5,2,4,5,4',
      score: 810,
      docId: 2,
      userId: 3,
    },
  });
  await prisma.score.upsert({
    where: { id: 7 },
    update: {},
    create: {
      alternatives: '1,2,3,4,5,5,3,4,2,4,5,5,2,4,5,4',
      score: 940,
      docId: 2,
      userId: 1,
    },
  });
  await prisma.score.upsert({
    where: { id: 8 },
    update: {},
    create: {
      alternatives: '1,2,3,4,5,5,3,4,2,4,5,5,2,4,5,4',
      score: 810,
      docId: 2,
      userId: 2,
    },
  });
  await prisma.score.upsert({
    where: { id: 9 },
    update: {},
    create: {
      alternatives: '1,2,3,4,5,5,3,4,2,4,5,5,2,4,5,4',
      score: 790,
      docId: 2,
      userId: 3,
    },
  });
  //   },
  // });
  // const score = await prisma.score.upsert({
  //   where: { id: 1 },
  //   update: {},
  //   create: {

  //   }
  // })

  // console.log({ admin, grade1, school1 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
