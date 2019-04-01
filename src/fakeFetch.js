const DATA = {
  '/pub': [
    'Jackalope',
    'Green Man',
    'Yorkshire Grey',
    'Crown & Sceptre',
    'BBC Club',
  ],
  '/coffee': ['Attendant', 'Kaffeine', 'Caravan', 'Alex Coffee', 'Caffè Nero'],
  '/lunch': ['Pret', 'Itsu', 'Canteen', 'EAT.', "Benito's Hat"],
  '/dinner': [
    'Pizza Express',
    'Franco Manca',
    'Wahaca',
    'Honest Burgers',
    'Pho',
  ],
};

export default path =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!DATA[path]) {
        reject(new Error('Path not found'));
        return;
      }

      const values = DATA[path];

      const value = values[Math.floor(Math.random() * values.length)];

      resolve(value);
    }, 1000 + Math.random() * 1000);
  });
