class HumansController < ApplicationController

  get "/humans" do
    @humans = Human.all
    erb :"humans/index"
  end

  get "/humans/new" do
    @cats = Cat.all
    erb :"humans/new"
  end

  post "/humans" do
    human = Human.create(params[:human])
    redirect "/humans/#{human.id}"
  end

  get "/humans/:id" do
    @human = Human.find(params[:id])
    erb :"humans/show"
  end

end
