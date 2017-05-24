json.extract! goal, :id, :client_id, :goals, :revision_date, :status, :created_at, :updated_at
json.url goal_url(goal, format: :json)