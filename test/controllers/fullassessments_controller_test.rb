require 'test_helper'

class FullassessmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @fullassessment = fullassessments(:one)
  end

  test "should get index" do
    get fullassessments_url
    assert_response :success
  end

  test "should get new" do
    get new_fullassessment_url
    assert_response :success
  end

  test "should create fullassessment" do
    assert_difference('Fullassessment.count') do
      post fullassessments_url, params: { fullassessment: { client_id: @fullassessment.client_id, fassess: @fullassessment.fassess } }
    end

    assert_redirected_to fullassessment_url(Fullassessment.last)
  end

  test "should show fullassessment" do
    get fullassessment_url(@fullassessment)
    assert_response :success
  end

  test "should get edit" do
    get edit_fullassessment_url(@fullassessment)
    assert_response :success
  end

  test "should update fullassessment" do
    patch fullassessment_url(@fullassessment), params: { fullassessment: { client_id: @fullassessment.client_id, fassess: @fullassessment.fassess } }
    assert_redirected_to fullassessment_url(@fullassessment)
  end

  test "should destroy fullassessment" do
    assert_difference('Fullassessment.count', -1) do
      delete fullassessment_url(@fullassessment)
    end

    assert_redirected_to fullassessments_url
  end
end
