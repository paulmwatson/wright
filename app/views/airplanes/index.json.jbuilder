json.array!(@airplanes) do |airplane|
  json.extract! airplane, :name, :desc, :image_url
  json.url airplane_url(airplane, format: :json)
end