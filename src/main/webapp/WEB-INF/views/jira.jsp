<%--
  Created by IntelliJ IDEA.
  User: Akshat Singhal
  Date: 09-Feb-20
  Time: 11:55 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<% session.setAttribute("userset",true);%>
<!DOCTYPE html>
<html>
<head>
    <title>Index Page</title>
    <jsp:include page="/WEB-INF/partials/header.jsp"/>
    <!-- <link rel="stylesheet" type="text/css" href="jira.css"> -->
</head>
<body style="background-color : lightgreen;">
<jsp:include page="/WEB-INF/partials/navbar.jsp"/>
<div class="container-fluid pt-3">
    <div class="row">
        <div class="col-md-8">
            <div class="card-columns">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title text-center">TPM-1944</h4>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title text-center">Reduce DAC Build Time</h5>
                        <p class="card-text text-justify">As an IDL user, I want to reduce the DAC build time in order to make it faster to run.</p>
                    </div>
                    <div class="card-footer text-center">
                        <div class="btn-group btn-group-sm">
                            <a style="color: white;" class="btn btn-sm btn-primary ">Open here</a>
                            <a style="color: white;" class="btn btn-sm btn-success ">Open in new tab</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-md-1">

        </div>
        <div class="col-md-2 bg-white">
            <h2 class="text-center">Status</h2>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped table-hover">
                        <tr>
                            <th>Status</th>
                            <th>JIRAS</th>
                        </tr>
                        <tr>
                            <td class="text-success">DONE</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td class="text-warning">IN PLAY</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td class="text-primary">ON HOLD</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td class="text-danger">CANCELLED</td>
                            <td>2</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
    </div>
</div>
</body>