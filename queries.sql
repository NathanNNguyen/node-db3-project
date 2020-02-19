-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.ProductName, c.CategoryName from Products as p
join Categories as c on p.CategoryID = c.CategoryID

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select OrderId, ShipperName from Orders as o
join Shippers as s on o.ShipperID = s.ShipperID
where o.OrderDate < '2012-08-09'
order by o.OrderDate 

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select ProductName, Quantity from Products as p
join OrderDetails as o on p.ProductID = o.ProductID
where OrderId = 10251
order by ProductName


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select OrderID, CustomerName, LastName from Orders as o
join Customers as c on o.CustomerID = c.CustomerID
join Employees as e on o.EmployeeID = e.EmployeeID