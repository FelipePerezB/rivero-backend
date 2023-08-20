import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
const encrypt = async (password: string) => await bcrypt.hash(password, 10);
async function main() {
  await prisma.school.upsert({
    where: { name: 'Colegio Pucón' },
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
    where: { grade: '4° Medio' },
    update: {},
    create: {
      grade: '4° Medio',
    },
  });

  await prisma.grade.upsert({
    where: { grade: '3° Medio' },
    update: {},
    create: {
      grade: '3° Medio',
    },
  });

  await prisma.grade.upsert({
    where: { grade: '2° Medio' },
    update: {},
    create: {
      grade: '2° Medio',
    },
  });

  await prisma.grade.upsert({
    where: { grade: '1° Medio' },
    update: {},
    create: {
      grade: '1° Medio',
    },
  });

  await prisma.subject.upsert({
    where: { name: 'Lenguaje' },
    update: {},
    create: {
      name: 'Lenguaje',
      color: '#46d37e',
    },
  });

  await prisma.subject.upsert({
    where: { name: 'Matemática' },
    update: {},
    create: {
      name: 'Matemática',
      color: '#e86675',
    },
  });

  await prisma.topic.upsert({
    where: { name: 'Álgebra' },
    update: {},
    create: {
      name: 'Álgebra',
      subjectId: 1,
    },
  });

  await prisma.topic.upsert({
    where: { name: 'Geometria' },
    update: {},
    create: {
      name: 'Geometria',
      subjectId: 1,
    },
  });

  await prisma.subtopic.upsert({
    where: { name: 'Ecuaciones' },
    update: {},
    create: {
      name: 'Ecuaciones',
      subjectId: 1,
      topicId: 1,
    },
  });

  await prisma.subtopic.upsert({
    where: { name: 'Productos notables' },
    update: {},
    create: {
      name: 'Productos notables',
      subjectId: 1,
      topicId: 1,
    },
  });

  await prisma.user.upsert({
    where: { email: 'felipe@prisma.io' },
    update: {},
    create: {
      email: 'felipe@prisma.io',
      name: 'Felipe',
      lastname: 'admin',
      nickname: 'adminsito',
      gradeId: 1,
      password: await encrypt('admin123'),
      role: 'ADMIN',
      schoolId: 1,
    },
  });
  await prisma.user.upsert({
    where: { email: 'martin@prisma.io' },
    update: {},
    create: {
      email: 'martin@prisma.io',
      name: 'Felipe',
      lastname: 'admin',
      nickname: 'adminsito',
      gradeId: 1,
      password: await encrypt('admin123'),
      role: 'ADMIN',
      schoolId: 1,
    },
  });
  await prisma.user.upsert({
    where: { email: 'alicia@prisma.io' },
    update: {},
    create: {
      email: 'alicia@prisma.io',
      name: 'Felipe',
      lastname: 'admin',
      nickname: 'adminsito',
      gradeId: 1,
      password: await encrypt('admin123'),
      role: 'ADMIN',
      schoolId: 1,
    },
  });

  await prisma.doc.upsert({
    where: { id: 1 },
    update: {},
    create: {
      externalId: 'gHQW78Y/WQ',
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
      title: 'ENSAYO N°2',
      type: 'EVALUATION',
      Topic: {
        connect: {
          name: 'Álgebra',
        },
      },
      Subtopic: {
        connect: {
          name: 'Ecuaciones',
        },
      },
      Subject: {
        connect: {
          name: 'Matemática',
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
      title: 'ENSAYO N°2',
      type: 'EVALUATION',
      Topic: {
        connect: {
          name: 'Álgebra',
        },
      },
      Subtopic: {
        connect: {
          name: 'Ecuaciones',
        },
      },
      Subject: {
        connect: {
          name: 'Matemática',
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
