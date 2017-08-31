class CreateClients < ActiveRecord::Migration[5.0]
  def change
    create_table :clients do |t|
      t.string :firstname
      t.string :lastname
      t.string :gender
      t.string :dob
      t.string :allergies
      t.string :cdiet
      t.string :dx
      t.integer :ht
      t.integer :cbw
      t.string :date0
      t.integer :thirtywt
      t.integer :ninetywt
      t.integer :oneeightywt
      t.string :date1
      t.string :date2
      t.string :date3
      t.integer :intakefrom
      t.integer :intaketo
      t.decimal :bmi
      t.integer :ibw
      t.integer :calreq
      t.integer :proreq
      t.integer :flreq
      t.string :fpes
      t.string :pes0
      t.string :pes1
      t.string :pes2

      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
