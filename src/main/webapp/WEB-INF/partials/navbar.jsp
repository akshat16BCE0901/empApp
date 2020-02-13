<%@ page import="org.apache.commons.logging.Log" %>
<?xml version=“1.0” encoding=“UTF-8” ?>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN”  “http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd” >
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<nav class="navbar navbar-expand-sm bg-primary ">
    <a class="navbar-brand bg-white pl-2 pr-2" href="#">JIRA APP</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item bg-white pr-2">
                <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item bg-white pr-2 dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Teams
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item-text" href="#">Avengers</a>
                    <a class="dropdown-item-text" href="#">Stabilizers</a>
                    <a class="dropdown-item-text" href="#">Phoenix</a>
                </div>
            </li>
            <li class="nav-item bg-white pr-2">
                <a class="nav-link" href="#">Sprints</a>
            </li>
        </ul>



        <% if(session.getAttribute("userset")!=null && session.getAttribute("userset")==Boolean.TRUE){%>
            <ul class="navbar-nav bg-white">
                <li class="nav-item">
                    <a class="nav-link" href="#"><span class="fas fa-sign-in-alt"></span> Login</a>
                </li>
                <li class="nav-item bg-white">
                    <a class="nav-link" href="#"><span class="fas fa-user"></span> Signup</a>
                </li>
            </ul>
        <%}%>

    </div>
</nav>