require 'test_helper'

class AjaxgetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ajaxget = ajaxgets(:one)
  end

  test "should get index" do
    get ajaxgets_url
    assert_response :success
  end

  test "should get new" do
    get new_ajaxget_url
    assert_response :success
  end

  test "should create ajaxget" do
    assert_difference('Ajaxget.count') do
      post ajaxgets_url, params: { ajaxget: {  } }
    end

    assert_redirected_to ajaxget_url(Ajaxget.last)
  end

  test "should show ajaxget" do
    get ajaxget_url(@ajaxget)
    assert_response :success
  end

  test "should get edit" do
    get edit_ajaxget_url(@ajaxget)
    assert_response :success
  end

  test "should update ajaxget" do
    patch ajaxget_url(@ajaxget), params: { ajaxget: {  } }
    assert_redirected_to ajaxget_url(@ajaxget)
  end

  test "should destroy ajaxget" do
    assert_difference('Ajaxget.count', -1) do
      delete ajaxget_url(@ajaxget)
    end

    assert_redirected_to ajaxgets_url
  end
end
