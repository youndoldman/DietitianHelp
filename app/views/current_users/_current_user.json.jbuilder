json.extract! current_user, :id, :created_at, :updated_at
json.url current_user_url(current_user, format: :json)
