<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html>
	<head>
		<jsp:include page="/WEB-INF/partials/header.jsp"></jsp:include>
		<title>Thanks</title>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1 class="text-center">All Employees</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<table class="table table-striped">
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Age</th>
							<th>Date of birth</th>
						</tr>
						<c:forEach items="${employeesList}" var="emp" >
							<tr>
								<td><c:out value="${emp.id}"></c:out></td>
								<td><c:out value="${emp.name}"></c:out></td>
								<td><c:out value="${emp.age}"></c:out></td>
								<td><c:out value="${emp.date_of_birth}"></c:out></td>
							</tr>
						</c:forEach>
					</table>
				</div>
			</div>
		</div>
	</body>
</html>