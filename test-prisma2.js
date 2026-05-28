const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  try {
    const msg = await prisma.message.create({
      data: {
        key: {
          id: 'wamid.HBgNNTIxMjIxNTI3MTkxNBUCABIYIEFDNTEzQzlCRkQxMTM2QzM5NjAzQjJFMEM3QkJEMDFCAA==',
          remoteJid: '522215271914@s.whatsapp.net',
          fromMe: false
        },
        pushName: '.',
        message: { imageMessage: { mime_type: 'image/jpeg' } },
        messageType: 'imageMessage',
        messageTimestamp: 1779928937,
        source: 'unknown',
        instanceId: '9a926f0d-f1d1-4277-94ad-ed9d2bb6918f'
      }
    });
    console.log('Success:', msg.id);
  } catch(e) {
    console.log('Error:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}

test();
