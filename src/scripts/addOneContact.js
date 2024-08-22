import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    let data;
    try {
      data = await fs.readFile(PATH_DB, 'utf-8');
    } catch (readError) {
      if (readError.code === 'ENOENT') {
        console.log('Файл не знайдено, створюємо новий.');
        data = '[]';
        await fs.mkdir(PATH_DB.substring(0, PATH_DB.lastIndexOf('/')), {
          recursive: true,
        });
        await fs.writeFile(PATH_DB, data);
      } else {
        throw readError;
      }
    }

    const contacts = JSON.parse(data);

    const newContact = createFakeContact();

    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

    console.log(`✅ Успішно додано новий контакт: ${newContact.name}`);
  } catch (error) {
    console.error(
      '❌ Сталася помилка під час додавання контакту:',
      error.message,
    );
  }
};
addOneContact();
