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

ActiveRecord::Schema.define(version: 20170411122016) do

  create_table "clients", force: :cascade do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "dob"
    t.string   "allergies"
    t.string   "cdiet"
    t.string   "dx"
    t.integer  "ht"
    t.integer  "cbw"
    t.string   "date0"
    t.integer  "thirtywt"
    t.integer  "ninetywt"
    t.integer  "oneeightywt"
    t.string   "date1"
    t.string   "date2"
    t.string   "date3"
    t.integer  "intakefrom"
    t.integer  "intaketo"
    t.decimal  "bmi"
    t.integer  "ibw"
    t.integer  "calreq"
    t.integer  "proreq"
    t.integer  "flreq"
    t.string   "fpes"
    t.string   "pes0"
    t.string   "pes1"
    t.string   "pes2"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "gender"
    t.integer  "user_id"
    t.index ["user_id"], name: "index_clients_on_user_id"
  end

  create_table "documents", force: :cascade do |t|
    t.integer  "client_id"
    t.integer  "fullassessment_id"
    t.integer  "progressnote_id"
    t.integer  "monitoringnote_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["client_id"], name: "index_documents_on_client_id"
    t.index ["fullassessment_id"], name: "index_documents_on_fullassessment_id"
    t.index ["monitoringnote_id"], name: "index_documents_on_monitoringnote_id"
    t.index ["progressnote_id"], name: "index_documents_on_progressnote_id"
  end

  create_table "fullassessments", force: :cascade do |t|
    t.text     "fassess"
    t.integer  "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_fullassessments_on_client_id"
  end

  create_table "monitoringnotes", force: :cascade do |t|
    t.text     "mnote"
    t.integer  "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_monitoringnotes_on_client_id"
  end

  create_table "nextevaluationnotes", force: :cascade do |t|
    t.text     "nnote"
    t.integer  "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date     "nnote_date"
    t.integer  "user_id"
    t.index ["client_id"], name: "index_nextevaluationnotes_on_client_id"
    t.index ["user_id"], name: "index_nextevaluationnotes_on_user_id"
  end

  create_table "progressnotes", force: :cascade do |t|
    t.text     "pnote"
    t.integer  "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_progressnotes_on_client_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",               default: "", null: false
    t.string   "email"
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
