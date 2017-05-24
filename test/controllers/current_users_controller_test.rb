require 'test_helper'

class CurrentUsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @current_user = current_users(:one)
  end

  test "should get index" do
    get current_users_url
    assert_response :success
  end

  test "should get new" do
    get new_current_user_url
    assert_response :success
  end

  test "should create current_user" do
    assert_difference('CurrentUser.count') do
      post current_users_url, params: { current_user: {  } }
    end

    assert_redirected_to current_user_url(CurrentUser.last)
  end

  test "should show current_user" do
    get current_user_url(@current_user)
    assert_response :success
  end

  test "should get edit" do
    get edit_current_user_url(@current_user)
    assert_response :success
  end

  test "should update current_user" do
    patch current_user_url(@current_user), params: { current_user: {  } }
    assert_redirected_to current_user_url(@current_user)
  end

  test "should destroy current_user" do
    assert_difference('CurrentUser.count', -1) do
      delete current_user_url(@current_user)
    end

    assert_redirected_to current_users_url
  end
end
