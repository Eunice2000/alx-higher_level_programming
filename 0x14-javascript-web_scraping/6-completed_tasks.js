const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const todos = JSON.parse(body);

  const completedByUser = {};

  for (const todo of todos) {
    if (todo.completed) {
      const userId = todo.userId;
      if (completedByUser[userId]) {
        completedByUser[userId]++;
      } else {
        completedByUser[userId] = 1;
      }
    }
  }

  for (const userId in completedByUser) {
    console.log(`${userId}: ${completedByUser[userId]}`);
  }
});

