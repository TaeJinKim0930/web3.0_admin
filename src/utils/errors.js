const errors = [
    { code: 1001, message: 'Failed to delete failed verification dummy users' },
    { code: 1002, message: 'Invalid email format' },
    { code: 1003, message: 'Internal server error: DB connection issue with given email' },
    { code: 1004, message: 'User already exists. Use a different email' },
    { code: 1005, message: 'Fill out empty space' },
    { code: 1006, message: 'Failed inserting dummy' },
    { code: 1007, message: 'Error deleting expired data' }
  ];

  module.exports = errors;