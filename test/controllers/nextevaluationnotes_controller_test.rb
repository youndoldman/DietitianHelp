require 'test_helper'

class NextevaluationnotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @nextevaluationnote = nextevaluationnotes(:one)
  end

  test "should get index" do
    get nextevaluationnotes_url
    assert_response :success
  end

  test "should get new" do
    get new_nextevaluationnote_url
    assert_response :success
  end

  test "should create nextevaluationnote" do
    assert_difference('Nextevaluationnote.count') do
      post nextevaluationnotes_url, params: { nextevaluationnote: { client_id: @nextevaluationnote.client_id, nnote: @nextevaluationnote.nnote } }
    end

    assert_redirected_to nextevaluationnote_url(Nextevaluationnote.last)
  end

  test "should show nextevaluationnote" do
    get nextevaluationnote_url(@nextevaluationnote)
    assert_response :success
  end

  test "should get edit" do
    get edit_nextevaluationnote_url(@nextevaluationnote)
    assert_response :success
  end

  test "should update nextevaluationnote" do
    patch nextevaluationnote_url(@nextevaluationnote), params: { nextevaluationnote: { client_id: @nextevaluationnote.client_id, nnote: @nextevaluationnote.nnote } }
    assert_redirected_to nextevaluationnote_url(@nextevaluationnote)
  end

  test "should destroy nextevaluationnote" do
    assert_difference('Nextevaluationnote.count', -1) do
      delete nextevaluationnote_url(@nextevaluationnote)
    end

    assert_redirected_to nextevaluationnotes_url
  end
end
