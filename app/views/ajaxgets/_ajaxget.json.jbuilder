json.extract! ajaxget, :id, :created_at, :updated_at
json.url ajaxget_url(ajaxget, format: :json)