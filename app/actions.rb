# Homepage (Root path)
get '/' do

  # binding.pry
  erb :index
end

get '/user/all' do
  @user_array = []
  User.all.each do |user| 
    @user_array << {firstname: user.firstname,
                   lastname:  user.lastname,
                    phonenumber: user.phonenumber}
  end
  @user_array.to_json
end

get '/user/:id' do

  @contact = User.find(params[:id].to_i)

  [{firstname: @contact.firstname,
   lastname: @contact.lastname, 
    phonenumber: @contact.phonenumber}].to_json
end


post '/user' do
  #create a new user 
  @user_create = User.create({firstname: params[:firstname],
                              lastname: params[:lastname],
                              phonenumber: params[:phonenumber]})
  redirect '/user/' + User.where(firstname: params[:firstname])[0].id.to_s
end


