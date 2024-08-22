import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');

    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.error(
      '❌ Сталася помилка під час читання контактів:',
      error.message,
    );
    return [];
  }
};

getAllContacts().then((contacts) => console.log(contacts));
