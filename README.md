# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

For bootstrapping:
<% if logged_in? %>
  <script type="text/javascript">
  window.currentUser = <%=
    render(
      "api/users/user.json.jbuilder", user: current_user
    ).html_safe
  %>
  </script>
<% end %>