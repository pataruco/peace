# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150710135708) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "peaces", force: :cascade do |t|
    t.string   "country_name"
    t.string   "country_code"
    t.float    "edu_index"
    t.float    "heal_index"
    t.float    "edu_exp"
    t.float    "heal_exp"
    t.float    "gdp"
    t.float    "life"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.float    "hdi_index"
    t.string   "edu_index_color"
    t.string   "heal_index_color"
    t.string   "edu_exp_color"
    t.string   "heal_exp_color"
    t.string   "gdp_color"
    t.string   "life_color"
    t.string   "hdi_index_color"
  end

  create_table "users", force: :cascade do |t|
    t.boolean  "admin"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "wars", force: :cascade do |t|
    t.string   "country_name"
    t.string   "country_code"
    t.float    "homicide"
    t.float    "prison"
    t.float    "crime"
    t.float    "terrorism"
    t.float    "military_gdp"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

end
