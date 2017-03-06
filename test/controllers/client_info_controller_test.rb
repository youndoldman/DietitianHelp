require 'test_helper'

class ClientInfoControllerTest < ActionDispatch::IntegrationTest
  test "should get key_info" do
    get client_info_key_info_url
    assert_response :success
  end

  test "should get other_info" do
    get client_info_other_info_url
    assert_response :success
  end

end
