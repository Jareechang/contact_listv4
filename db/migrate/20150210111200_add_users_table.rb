class AddUsersTable < ActiveRecord::Migration 
  def change
     create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :phonenumber
     end
  end
end