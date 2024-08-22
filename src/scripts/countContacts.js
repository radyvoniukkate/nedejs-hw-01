import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');

    const contacts = JSON.parse(data);

    return contacts.length;
  } catch (error) {
    console.error(
      '❌ Сталася помилка під час підрахунку контактів:',
      error.message,
    );
    return 0;
  }
};

countContacts().then((count) => console.log(`Кількість контактів: ${count}`));
