class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.string :name
      t.string :desc
      t.string :image_url

      t.timestamps
    end
  end
end
