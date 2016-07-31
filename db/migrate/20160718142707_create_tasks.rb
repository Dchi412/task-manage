class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :content
      t.integer :status, limit: 4
      #t.references :parent_task_id, foreign_key: true
      t.datetime :start_task
      t.datetime :end_task
      t.float :expected_hour
      t.datetime :limit_date
      t.timestamps null: false
    end
    #add_index :tasks, [:parent_task_id, :created_at]
  end
end
