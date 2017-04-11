require 'test_helper'

class DocumentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @document = documents(:one)
  end

  test "should get index" do
    get documents_url
    assert_response :success
  end

  test "should get new" do
    get new_document_url
    assert_response :success
  end

  test "should create document" do
    assert_difference('Document.count') do
      post documents_url, params: { document: { client_id: @document.client_id, fullassessment_id_id: @document.fullassessment_id_id, monitoringnote_id_id: @document.monitoringnote_id_id, progressnote_id_id: @document.progressnote_id_id } }
    end

    assert_redirected_to document_url(Document.last)
  end

  test "should show document" do
    get document_url(@document)
    assert_response :success
  end

  test "should get edit" do
    get edit_document_url(@document)
    assert_response :success
  end

  test "should update document" do
    patch document_url(@document), params: { document: { client_id: @document.client_id, fullassessment_id_id: @document.fullassessment_id_id, monitoringnote_id_id: @document.monitoringnote_id_id, progressnote_id_id: @document.progressnote_id_id } }
    assert_redirected_to document_url(@document)
  end

  test "should destroy document" do
    assert_difference('Document.count', -1) do
      delete document_url(@document)
    end

    assert_redirected_to documents_url
  end
end
