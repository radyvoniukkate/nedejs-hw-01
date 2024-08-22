import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const removeAllContacts = async () => {
  try {
    const emptyArray = [];

    await fs.writeFile(PATH_DB, JSON.stringify(emptyArray, null, 2));

    console.log('✅ Усі контакти успішно видалено.');
  } catch (error) {
    console.error(
      '❌ Сталася помилка під час видалення контактів:',
      error.message,
    );
  }
};

removeAllContacts();
