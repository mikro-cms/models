const mongoose = require('mongoose');
const crypto = require('crypto');
const modelRole = require('./role');
const modelUser = require('./user');

const schema = new mongoose.Schema({
  'migrate_status': Boolean
}, {
  autoCreate: true
});

const modelMigration = mongoose.model('migration', schema, 'migration');

// Data have imported
const imported = {};

/**
 * Initialization database with collection and required document.
 *
 * @return  mixed
 */
async function migrate() {
  const migrateStatus = await hasBeenMigrated();

  if (migrateStatus) {
    return true;
  }

  await importRoles();
  await importUsers();

  // first time migration
  return null;
}

/**
 * Check migration status.
 *
 * @return  boolean
 */
async function hasBeenMigrated() {
  imported.migrationInfo = await modelMigration.findOne().exec();

  if (imported.migrationInfo === null) {
    return false;
  }

  return imported.migrationInfo.migrate_status;
}

/**
 * Import user roles.
 *
 * @return  void
 */
async function importRoles() {
  imported.roleAdmin = new modelRole({
    'role_name': 'admin',
    'role_group': 'admin'
  });

  await imported.roleAdmin.save();

  imported.userMember = new modelRole({
    'role_name': 'member',
    'role_group': 'member'
  });

  await imported.userMember.save();

  imported.roleGuest = new modelRole({
    'role_name': 'guest',
    'role_group': 'guest'
  });

  await imported.roleGuest.save();
}

/**
 * Import users.
 *
 * @return  void
 */
async function importUsers() {
  imported.userAdmin = new modelUser({
    'user_email': 'admin@mikro.cms',
    'user_username': 'admin',
    'user_password': crypto.createHash('md5').update('admin').digest('hex'),
    'role': imported.roleAdmin._id
  });

  await imported.userAdmin.save();
}

module.exports = {
  modelMigration,
  migrate,
  importRoles,
  importUsers
};
