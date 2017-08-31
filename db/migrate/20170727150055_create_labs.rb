class CreateLabs < ActiveRecord::Migration[5.0]
  def change
    create_table :labs do |t|
      t.date :date
      t.integer :alb
      t.integer :bun
      t.integer :creat
      t.integer :chol
      t.integer :glu
      t.integer :hct
      t.integer :hgb
      t.integer :iron
      t.integer :k
      t.integer :na
      t.integer :tprotein
      t.integer :tlymph
      t.integer :tsh
      t.integer :gfr
      t.integer :a1c
      
      t.belongs_to :client, foreign_key: true

      t.timestamps
    end
  end
end
