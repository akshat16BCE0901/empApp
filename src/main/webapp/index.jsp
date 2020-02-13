<%--
  Created by IntelliJ IDEA.
  User: Akshat Singhal
  Date: 09-Feb-20
  Time: 11:53 PM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% session.setAttribute("userset",false);%>
<!DOCTYPE html>
<html>
<head>
    <title>Index Page</title>
    <jsp:include page="WEB-INF/partials/header.jsp" />
    <link rel="stylesheet" type="text/css" href="/css/index.css">
</head>
<body style="background-color: lightgreen;">
<jsp:include page="WEB-INF/partials/navbar.jsp" />
<div class="container-fluid">
    <div class="row mt-4">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="row border border-primary rounded-lg" style="padding: 15px; background-color: white;">
                <div class="col-md-5 border border-primary border-left-0 border-bottom-0 border-top-0">
                    <h2 class="text-center">Log In</h2>
                    <form action="" method="post" name="login" >
                        <div class="form-group">
                            <input type="text" name="username" class="form-control" id="username" placeholder="Username">
                        </div>
                        <div class="form-group">
                            <input type="password" name="password"  class="form-control" id="password" placeholder="Password">
                        </div>
                        <div class="text-center ">
                            <button type="submit" class="btn btn-primary">Log in</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-7">
                    <h2 class="text-center">Sign Up</h2>
                    <form action="" method="post" name="login">
                        <div class="form-group row pl-3">
                            <input type="text" name="name" class="form-control col-md-5" id="firstname" placeholder="First Name" />
                            <input type="text" name="name" class="form-control ml-md-2 col-md-5" id="lastname" placeholder="Last Name" />
                        </div>

                        <div class="form-group row pl-3">
                            <input type="email" name="email" class="form-control" id="email" placeholder="Email" >
                        </div>

                        <div class="form-group row pl-3">
                            <input type="date" name="date_of_birth" class="form-control" id="date_of_birth" >
                        </div>

                        <div class="form-group row pl-3">
                            <textarea placeholder="Address" rows="3" cols="40"  style="resize: none;" class="form-control"></textarea>
                        </div>
                        <div class="form-group row pl-3">
                            <select class="col-md-2 col-sm-3 form-control">
                                <option value="+81">+81</option>
                                <option value="+82">+82</option>
                                <option value="+83">+83</option>
                                <option value="+84">+84</option>
                                <option value="+85">+85</option>
                                <option value="+86">+86</option>
                                <option value="+87">+87</option>
                                <option value="+88">+88</option>
                                <option value="+89">+89</option>
                                <option value="+90">+90</option>
                                <option selected value="+91">+91</option>
                                <option value="+92">+92</option>
                                <option value="+93">+93</option>
                                <option value="+94">+94</option>
                                <option value="+95">+95</option>
                                <option value="+96">+96</option>
                                <option value="+97">+97</option>
                                <option value="+98">+98</option>
                                <option value="+99">+99</option>
                            </select>
                            <input type="text" maxlength="10" minlength="10" name="phone" id="phone"  class="form-control ml-md-1 col-md-7 col-sm-8 " placeholder="Phone">
                        </div>
                        <div class="text-center ">
                            <button type="submit" class="btn btn-primary">Create Your Free Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>
</div>
</body>
</html>