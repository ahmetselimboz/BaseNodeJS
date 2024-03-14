const mongoose = require("mongoose");
const config = require("../../config/environments")

const schema = mongoose.Schema(
  {
    email: String,
    password: String,
    language: { type: String, default: config.DEFAULT_LANG },
  },
  { versionKey: false, timestamps: true }
);

class AuditLogs extends mongoose.Model {}

schema.loadClass(AuditLogs);

module.exports = mongoose.model("audit_logs", schema);
