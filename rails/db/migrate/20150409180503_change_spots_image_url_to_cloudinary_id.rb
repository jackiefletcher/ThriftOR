class ChangeSpotsImageUrlToCloudinaryId < ActiveRecord::Migration
  def change
    remove_column :spots, :image_url, :string
    add_column :spots, :cloudinaryPublicId, :string
  end
end
