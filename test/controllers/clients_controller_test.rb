require 'test_helper'

class ClientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @client = clients(:one)
  end

  test "should get index" do
    get clients_url
    assert_response :success
  end

  test "should get new" do
    get new_client_url
    assert_response :success
  end

  test "should create client" do
    assert_difference('Client.count') do
      post clients_url, params: { client: { allergies: @client.allergies, bmi: @client.bmi, calreq: @client.calreq, cbw: @client.cbw, cdiet: @client.cdiet, date0: @client.date0, date1: @client.date1, date2: @client.date2, date3: @client.date3, dx: @client.dx, fassess: @client.fassess, firstname: @client.firstname, flreq: @client.flreq, fpes: @client.fpes, ht: @client.ht, ibw: @client.ibw, intakefrom: @client.intakefrom, intaketo: @client.intaketo, lastname: @client.lastname, ninetywt: @client.ninetywt, oneeightywt: @client.oneeightywt, pes0: @client.pes0, pes1: @client.pes1, pes2: @client.pes2, proreq: @client.proreq, thirtywt: @client.thirtywt } }
    end

    assert_redirected_to client_url(Client.last)
  end

  test "should show client" do
    get client_url(@client)
    assert_response :success
  end

  test "should get edit" do
    get edit_client_url(@client)
    assert_response :success
  end

  test "should update client" do
    patch client_url(@client), params: { client: { allergies: @client.allergies, bmi: @client.bmi, calreq: @client.calreq, cbw: @client.cbw, cdiet: @client.cdiet, date0: @client.date0, date1: @client.date1, date2: @client.date2, date3: @client.date3, dx: @client.dx, fassess: @client.fassess, firstname: @client.firstname, flreq: @client.flreq, fpes: @client.fpes, ht: @client.ht, ibw: @client.ibw, intakefrom: @client.intakefrom, intaketo: @client.intaketo, lastname: @client.lastname, ninetywt: @client.ninetywt, oneeightywt: @client.oneeightywt, pes0: @client.pes0, pes1: @client.pes1, pes2: @client.pes2, proreq: @client.proreq, thirtywt: @client.thirtywt } }
    assert_redirected_to client_url(@client)
  end

  test "should destroy client" do
    assert_difference('Client.count', -1) do
      delete client_url(@client)
    end

    assert_redirected_to clients_url
  end
end
