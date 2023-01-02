import React from 'react'
import JsonData from './data.json'
function Querydata(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
                    <td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.phone}</td>
					<td>{info.email}</td>
                    <td>{info.product}</td>
                    <td>{info.quantity}</td>
                    <td>{info.description}</td>
                    <td>{info.address}</td>
                    <td>{info.status}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
                    <th>Id</th>    
					<th>Name</th>
					<th>Phone Number</th>
                    <th>Email</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Address</th>
                    <th>Status</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default Querydata;
