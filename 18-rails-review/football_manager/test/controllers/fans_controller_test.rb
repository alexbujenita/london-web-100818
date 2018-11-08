require 'test_helper'

class FansControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fans_index_url
    assert_response :success
  end

  test "should get show" do
    get fans_show_url
    assert_response :success
  end

  test "should get new" do
    get fans_new_url
    assert_response :success
  end

  test "should get edit" do
    get fans_edit_url
    assert_response :success
  end

end
