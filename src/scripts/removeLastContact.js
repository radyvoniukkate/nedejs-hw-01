import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');

    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('Масив контактів порожній. Нічого видаляти.');
      return;
    }

    const removedContact = contacts.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

    console.log(`✅ Останній контакт видалено: ${removedContact.name}`);
  } catch (error) {
    console.error(
      '❌ Сталася помилка під час видалення останнього контакту:',
      error.message,
    );
  }
};

removeLastContact();
