<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    

<html>
	
	<head>
		<jsp:include page="/WEB-INF/partials/header.jsp"></jsp:include>
		<title>Add New Employee</title>
	</head>

	<body>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1 class="text-center">Enter Details - </h1>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6 text-center">
					<form:form modelAttribute="employee" class="text-center" action="submit_new" method="POST">
						<table class="table table-striped">
							
							<tr>
								<td>Full Name</td>
								<td><form:input path="name" type="text" /></td>
							</tr>
							<tr>
								<td>Age</td>
								<td><form:input path="age" type="number" /></td>
							</tr>
							<tr>
								<td>Date of Birth</td>
								<td><form:input path="date_of_birth" type="date" /></td>
							</tr>
							<tr>
								<td><input type="submit" class="text-center btn btn-primary" value="Submit"></td>
								<td><input type="reset" class="text-center btn btn-primary" value="Reset"></td>
							</tr>
						</table>
					</form:form>
				</div>
				<div class="col-md-3"></div>
			</div>
		</div>
	</body>
</html>