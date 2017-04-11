require 'test_helper'

class MonitoringnotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @monitoringnote = monitoringnotes(:one)
  end

  test "should get index" do
    get monitoringnotes_url
    assert_response :success
  end

  test "should get new" do
    get new_monitoringnote_url
    assert_response :success
  end

  test "should create monitoringnote" do
    assert_difference('Monitoringnote.count') do
      post monitoringnotes_url, params: { monitoringnote: { client_id: @monitoringnote.client_id, mnote: @monitoringnote.mnote } }
    end

    assert_redirected_to monitoringnote_url(Monitoringnote.last)
  end

  test "should show monitoringnote" do
    get monitoringnote_url(@monitoringnote)
    assert_response :success
  end

  test "should get edit" do
    get edit_monitoringnote_url(@monitoringnote)
    assert_response :success
  end

  test "should update monitoringnote" do
    patch monitoringnote_url(@monitoringnote), params: { monitoringnote: { client_id: @monitoringnote.client_id, mnote: @monitoringnote.mnote } }
    assert_redirected_to monitoringnote_url(@monitoringnote)
  end

  test "should destroy monitoringnote" do
    assert_difference('Monitoringnote.count', -1) do
      delete monitoringnote_url(@monitoringnote)
    end

    assert_redirected_to monitoringnotes_url
  end
end
