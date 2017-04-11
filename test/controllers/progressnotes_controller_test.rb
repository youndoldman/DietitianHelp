require 'test_helper'

class ProgressnotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @progressnote = progressnotes(:one)
  end

  test "should get index" do
    get progressnotes_url
    assert_response :success
  end

  test "should get new" do
    get new_progressnote_url
    assert_response :success
  end

  test "should create progressnote" do
    assert_difference('Progressnote.count') do
      post progressnotes_url, params: { progressnote: { client_id: @progressnote.client_id, pnote: @progressnote.pnote } }
    end

    assert_redirected_to progressnote_url(Progressnote.last)
  end

  test "should show progressnote" do
    get progressnote_url(@progressnote)
    assert_response :success
  end

  test "should get edit" do
    get edit_progressnote_url(@progressnote)
    assert_response :success
  end

  test "should update progressnote" do
    patch progressnote_url(@progressnote), params: { progressnote: { client_id: @progressnote.client_id, pnote: @progressnote.pnote } }
    assert_redirected_to progressnote_url(@progressnote)
  end

  test "should destroy progressnote" do
    assert_difference('Progressnote.count', -1) do
      delete progressnote_url(@progressnote)
    end

    assert_redirected_to progressnotes_url
  end
end
