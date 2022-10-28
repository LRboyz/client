import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const createCategory = async (count: number) => {
    const result = await prisma.category.create({
      data: {
        name: `分类${count}`,
        slug: `分类别名${count}`,
        description: '',
        extends: [
          {
            iconfont: 'icon-frontend'
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    console.log('分类创建成功！', result)
  }
  for (let i = 0; i < 10; i++) {
    createCategory(i)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
