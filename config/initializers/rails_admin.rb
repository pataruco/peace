RailsAdmin.config do |config|

  config.authorize_with do
    if current_user == nil
      #redirect_to main_app.new_user_session_path unless current_user.admin == true
      redirect_to main_app.new_user_session_path 
    end
  end



  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
